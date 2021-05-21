const fs = require('fs');


//同步读取文件 readFileSync(文件的路径)
let data = fs.readFileSync('./test.txt');

//读取的数据格式默认为buffer
console.log(data);
console.log(data.toString());


//异步读取文件 readFile(文件的路径，回调函数)
fs.readFile('./test.txt', (err,data)=> {
    if (err) throw err;
    console.log(data.toString());
});