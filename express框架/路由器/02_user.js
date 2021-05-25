//引入express模块
const express = require('express');
//创建路由器对象
const r = express.Router();

//添加路由get /list 响应'用户列表
r.get('/list', (req, res)=>{
    res.send('用户列表');
})

module.exports = r;