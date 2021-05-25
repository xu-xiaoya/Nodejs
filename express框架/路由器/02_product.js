const express = require('express');
const r = express.Router();

//添加路由get /list 响应商品列表
r.get('/list', (req, res)=>{
    res.send('商品列表');
})

module.exports = r;