/*
路由器三步；创建服务器、引入路由器模块、挂载路由器到特定前缀URL。
*/

//创建服务器
const express = require('express');
const app = express();
app.listen(8080);


//引入用户路由器模块
const userRouter = require('./02_user.js');
//console.log(userRouter);

//引入商品路由器模块
const productRouter = require('./02_product.js');
//console.log(productRouter);


//挂载路由器到WEB服务器，路由才能成为web服务器下的一部分
//参数1:要添加的前缀  参数2：要挂载的路由器
// /user/list
app.use('/user', userRouter);
// /product/list
app.use('/product', productRouter);