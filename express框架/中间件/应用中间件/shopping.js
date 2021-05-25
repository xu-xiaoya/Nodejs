const express = require('express');
const app = express();
app.listen(8080);

//传过去的price打八折再继续执行下去
function fn(req, res, next) {
    req.query.price *= 0.8; //隐式转换，数值
    next();
}
app.use('/shopping', fn);


app.get('/shopping', (req, res)=>{
    res.send(`
    商品的最终价格：${req.query.price}
    `);
});