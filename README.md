# 本程序是一款nodejs的应用，用于搭建web服务器，模拟后端，方便前端去mock数据，是基于express（express是基于node.js平台的web开发框架）

## JS技术栈
1.使用express.js创建一个服务，根据业务需要，创建响应请求的监听；
2.使用mock.js创建假数据，返回给请求。返回数据的具体语法，[可查看mock.js官方文档:]( http://mockjs.com/ )。


## 使用
1. 首次使用输入命令：`npm install` 或 `cnpm install`   安装依赖包
2. 执行命令：' node start ',启动mockserver服务，监测端口6022
3.访问链接地址 http://localhost:6022/ 测试mockserver是否正常启动，
访问 http://localhost:6022/  ，返回数据 {message: "成功", code: 1, data: {loginName: "我是测试信息"}}
访问 http://localhost:6022/mokeyufa ，返回mokejs随机创建的数据，
访问 http://localhost:6022/mo/mo ，返回mokejs创建的数据

## 提示
### api.json
api.json主要是模拟接口返回的数据结构，
api.josn主要是模拟接口返回的数据结构（json数据），有新增的请求，只需要在api.json添加即可。
data也可以使用mockjs,随机生成数据，具体语法，[可查看mock.js官方文档:]( http://mockjs.com/ )。

### serve.js
server.js主要是做mock的服务器。
1.创建一个服务。
2.读取api.json文件内容
3.拦截请求，返回匹配的数据
 

 ## 目前存在的问题
 可解决获取json数据的问题，但获取静态资源暂不支持

## 作者
  [sunny] - [彩云]( )  