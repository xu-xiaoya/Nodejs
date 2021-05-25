const express = require('express');
const querystring = require('querystring');

const app = express();
app.listen(8080);

app.get('/reg', (req, res)=>{
    res.sendFile(__dirname+'/reg.html');
});

app.post('/myreg', (req, res)=>{
    req.on('data', (chunk)=>{
        //得到数据为buffer，转字符串后为查询字符串
        //console.log(chunk.toString());
        let obj = querystring.parse(chunk.toString());
        console.log(obj);
    });
    res.send("注册成功");
});