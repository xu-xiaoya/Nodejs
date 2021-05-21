const fs = require('fs');

//同步查看文件
fs.readFileSync('./test.txt');

//异步查看文件
fs.readFile('./test.txt', (err)=>{
    if (err) throw err;
});