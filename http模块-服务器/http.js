//引入http模块
const http = require('http');

//创建web服务器
const app = http.createServer();

//设置端口1~65535
app.listen(8080);

//访问服务器
//http://127.0.0.1:8080
//http://localhost:8080


//添加事件，接收浏览器请求，并作出响应
//一旦浏览器请求，就会触发事件，调用回调函数
app.on('request', (req, res) => {
    //console.log('有一个用户进来！');
    //req 请求的对象

    //获取请求的资源url和方法
    //console.log(req.url, req.method);


    //res 响应的对象

    /*
    //设置相应的状态码和头信息(对象形式)
    res.writeHead(200, {
        'Content-Type':"text/html;charset=utf-8"    //可以省略，因为可以在网页中设置
    });

    //设置响应到浏览器的内容
    res.write('这是你的cite');
    //结束并发送
    res.end();
    */

    
    
    /*
    //设置相应的状态码302,设置跳转的URL。
    res.writeHead(302, {
        Location:'https://blog.csdn.net/qq_29493173?spm=1000.2115.3001.5113'
    });
    res.end();
    */



    
    res.writeHead(404);
    res.write('Not Found');
    res.end();
    
})