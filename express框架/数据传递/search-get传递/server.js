const express = require('express');
const url = require('url');

const app = express(); 
app.listen(8080);

app.get('/search', (req, res)=>{
    res.sendFile(__dirname+'/search.html');
});
//表单/mysearch的响应
app.get('/mysearch', (req, res)=>{
    //req获取请求的url和请求方法
    //console.log(req.url, req.method);
    //获取以查询字符串格式传递的数据
    console.log(req.query);

    res.send('搜索成功');
});