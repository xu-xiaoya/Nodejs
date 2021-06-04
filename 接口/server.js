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
<<<<<<< HEAD
});


//http://127.0.0.1:8080/v1/emps/1 
app.delete('/v1/emps/:eid', (req, res)=> {
    let obj = req.params;
    console.log(obj);
    
    //执行sql命令，查询编号对应的员工
    pool.query('delete from emp where eid = ?',[obj.eid], (err, result)=>{
        if (err) throw err;
        console.log(result);
        //如果对象下的affectedRows属性值为0说明删除失败，否则成功
        if (result.affectedRows === 0) {
            res.send({code:201,msg:'删除失败'});
        } else {
            res.send({code:200,msg:'删除成功'});
        }
    })

    
=======
>>>>>>> dce5cb4979bc609d8e61f489baf7c5eea2622178
});