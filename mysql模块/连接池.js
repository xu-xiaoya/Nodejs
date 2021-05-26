//引入mysql
const mysql = require('mysql');
const { prependListener } = require('process');
//创建连接池对象
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'tedu',
    connectionLimit: 15 //连接池大小
});

/*
//执行sql命令
//引号会有安全攻击性问题：sql注入
let str = 'Ya';
var sql = 'select * from emp where ename = "' + str + '"';
pool.query(sql, (err, result)=>{
    if (err) throw err;
    console.log(result);
})
*/

/*
//占位符(?)，mysql模块提供，用于过滤用户提供的数据
pool.query('insert into emp values(?,?,?,?,?,?)'
    ,[obj.eid, obj.ename, obj.sex, obj.birthday, obj.salary, obj.deptId], (err, result)=>{
        if (err) throw err;
        console.log(result);
});
/*
let obj = {
    eid: null,
    ename: 'Erya',
    sex: 0,
    birthday: '2000-08-22',
    salary: 15000,
    deptId: 10
}
//法一：
pool.query('insert into emp values(?,?,?,?,?,?)'
    ,[obj.eid, obj.ename, obj.sex, obj.birthday, obj.salary, obj.deptId], (err, result)=>{
        if (err) throw err;
        console.log(result);
});
//法二：直接set插入对象
pool.query('insert into emp set ?',[obj], (err, result)=>{
    if (err) throw err;
    console.log(result);
})
*/

//删除
let eid = 19;
pool.query('delete from emp where eid = ?',[eid],(err, result)=>{
    if (err) throw err;
    console.log(result);
});