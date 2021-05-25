//引入mysql模块
const mysql = require('mysql');
//创建连接对象
const c = mysql.createConnection({
    host: '127.0.0.1',      //域名/IP
    port: '3306',           //端口
    user: 'root',           //数据库的用户名
    password: '',           //密码
    database: 'tedu'        //连接成功后要进入的数据库
});

//测试连接
c.connect();