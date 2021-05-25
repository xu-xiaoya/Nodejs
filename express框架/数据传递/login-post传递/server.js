const express = require('express');
const querystring = require('querystring');
const url = require('url');

const app = express(); 
app.listen(8080);

app.get('/login', (req, res)=>{
    res.sendFile(__dirname+'/login.html');
});

//表单/mylogin的响应，传过来是post方式，也要使用post方式响应
app.post('/mylogin', (req, res)=>{
    //获取以查询字符串格式传递的数据
    //使用文件流 chunk获取的分段数据
    req.on('data', (chunk)=>{
        //得到数据为buffer，转字符串后为查询字符串
        let str = chunk.toString();
        //console.log(str);
        let obj = querystring.parse(str);
        console.log(obj);
    });

    res.send('登录成功');
});