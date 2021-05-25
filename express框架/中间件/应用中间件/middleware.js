const express = require('express');
const app = express();
app.listen(8080);

//添加中间件，拦截对/list的请求
function fn(req, res, next) {
    console.log('拦截了对/list的请求');
    //获取get形式传递的数据
    console.log(req.query);

    //检测是否为管理员
    //若用户名不是root，响应提供管理员账户
    if (req.query.uname !== 'root') {
        res.send('请提供管理员账户！');
    } else { //如果是root，往后继续执行
       //next是一个回调函数形式
       next();
    }

}
app.use('/list', fn);


app.get('/list', (req, res)=> {
    res.send('这是后台用户的数据');
});