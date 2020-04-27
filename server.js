const express = require('express');
const path = require('path');
const fs = require('fs');
const Mock = require('mockjs');

const app = express();
const port = 6022;
const apiPath = path.join(__dirname, './api.json');
let apiData = {};

app.listen(port, function () {
  console.info('mock server is  listening at ' + port)
});

//读取接口配置的JSON文件
let getApi = () => {
  let readStream = fs.createReadStream(apiPath, {
    encoding: 'utf8'
  });

  readStream.on('data', (chunk) => {
    apiData = JSON.parse(chunk)
  });
  readStream.on('end', () => {
    console.info('读取已完成..');
  });
}

fs.watchFile(apiPath, () => {
  getApi();
  console.info('mock server update');
});

getApi();

app.use((req, res, next) => {
  const originalUrl = req.originalUrl;
  let data = undefined;
  //匹配路径
  for (let url in apiData) {
    let findItem = apiData[url].find((result) => {
      if (result.url === originalUrl) {
        return result
      }
    });
    if (findItem !== undefined) {
      data = Mock.mock(findItem.res); //使用mock.js创建数据
      break;
    }
  }

 // 解决跨域问题
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
  res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')

  //返回数据
  data !== undefined ? res.send(data) : res.sendStatus(404);
  next();
});





  

