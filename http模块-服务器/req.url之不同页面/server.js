/*
创建web服务器，设置端口8080，添加事件，根据请求作出响应
    '/list'   响应  '这是商品列表'
    '/index'    响应文件'1.html'，先读取文件，然后把读取的内容作为响应的内容
    '/study'   跳转到 http://www.tmoo.cn
    其它    响应状态码404    not found
*/
const http = require('http');
const fs = require('fs');

const app = http.createServer();
app.listen(8080);

app.on('request', (req, res) => {
    //req 请求的对象
    //res 响应的对象
    if (req.url == '/list') {
        res.writeHead(200, {
            'Content-Type':"text/html;charset=utf-8"
        });
    
        //设置响应到浏览器的内容
        res.write('这是商品列表');
        //res.end();
    } else if (req.url == '/index') {
        let data = fs.readFileSync('./index.html');
        res.write(data.toString());
        //res.end();
    } else if (req.url == '/study') {
        //设置相应的状态码302,设置跳转的URL。
        res.writeHead(302, {
            Location:'http://www.tmooc.cn/'
         });
         //res.end();
    } else {
        res.writeHead(404);
        res.write('not found');
        //res.end();
    }
    //无论响应什么内容，最后结束再发送
    res.end();
})