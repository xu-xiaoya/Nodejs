//1、引入body-parser中间件
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.listen(8080);

//托管静态资源
app.use(express.static('./public'));

//2、使用body-parser中间件，将post请求的数据解析为对象,放在req.body中
app.use(bodyParser.urlencoded({
    extended:false//是否使用第三方查询字符串模块qs。不使用则使用核心模块下querystring
}));

app.post('/login', (req, res)=>{

    /*法一：post获取数据原方式：文件流（需在头部引入querystring模块）
        let str = chunk.toString();
        let obj = querystring.parse(str);
        console.log(obj);
    */

    //法二：使用body-parser中间件方法：
    //3、获取post传递的数据
    //前提使用了中间件
    console.log(req.body);

    res.send('登录成功');
});