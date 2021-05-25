//引入express模块
const express = require('express');
//console.log(express);


const app = express();
app.listen(8080);

//添加路由：处理对商品的请求
//请求的URL:/list 请求的方法：get
app.get('/list', (req, res)=>{
    //设置自响应的内容并发送
    res.send('这是商品列表');
});
app.get('/person', (req, res)=>{
    res.send(`<h2>这是个人中心</h2>
    欢迎回来`);
});

//添加路由：跳转
//get /study 跳转到tmooc
app.get('/study', (req, res)=>{
    res.redirect('http://www.tmooc.cn/');
});
////添加路由：跳转
//get / 跳转到/person  (同一服务器下直接写/URL)
app.get('/', (req, res)=>{
    res.redirect('/person');
});


//添加路由(get /index)，响应1.html
app.get('/index', (req, res)=>{
    //res.sendFile(__dirname+'\\1.html');
    //响应文件
    res.sendFile(__dirname+'/1.html');
});