const express = require('express');
const mysql = require('mysql');
const app = express();
app.listen(8080);

//创建连接池对象
const pool = mysql.createPool({
    host: '127.0.0.1',
    post: '3306',
    user: 'root',
    password: '123456',
    database: 'tedu',
    connectionLimit: 15
});


//获取员工资源的接口
//通过路由来完成的接口（get /v1/emps）
//http://127.0.0.1:8080/v1/emps/1 
app.get('/v1/emps/:eid', (req, res)=> {
    let obj = req.params;
    console.log(obj);
    
    //执行sql命令，查询编号对应的员工
    pool.query('select * from emp where eid = ?',[obj.eid], (err, result)=>{
        if (err) throw err;
        console.log(result);
    })

    res.send({code:200,msg:'获取成功'});
});