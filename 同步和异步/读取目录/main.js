const fs = require('fs');


//同步读取目录 readdirSync(目录的路径)
let arr = fs.readdirSync('./day');
console.log(arr);

//异步读取目录 readdir(目录的路径, 回调函数)
fs.readdir('./day',(err, arr)=>{
    if(err) throw err;
    console.log(arr);
});