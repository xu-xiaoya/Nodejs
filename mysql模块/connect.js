//引入mysql模块
const mysql = require('mysql');
//创建连接对象
const c = mysql.createConnection({
    host: '127.0.0.1',      //域名/IP
    port: '3306',           //端口
    user: 'root',           //数据库的用户名
    password: '123456',           //密码
    database: 'tedu'        //连接成功后要进入的数据库
});

//测试连接
//c.connect();


//query:执行sql命令，异步操作，通过回调函数获取结果
//第一个参数：err 可能产生的错误结果
//第二个参数：result 成功的结果

/*
//查询：
var sql = 'select * from  emp'
c.query(sql, function(err, result) {
    if (err) throw err;
    console.log(result);
});
*/


//null自增,插入一条数据到emp中
var sql = "insert into emp values(null,'Elegant', 0, '2000-10-22', 10000, 10)";
c.query(sql, function(err, result) {
    if (err) throw err; 
    console.log(result);
});