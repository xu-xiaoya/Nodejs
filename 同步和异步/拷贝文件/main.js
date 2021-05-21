const fs = require('fs');

let date = new Date();
let time = date.getTime();

//文件名称：防止重复可以使用事件毫秒数命名！

//同步：fs.copyFileSync(源文件路径,目标文件路径)
fs.copyFileSync('./stu.txt', `./${time}.txt`);

//异步：fs.copyFile(源文件路径,目标文件路径，callback)
/*
fs.codeFileSync('./stu.txt', `./mydir/${time}.txt`, (err)=> {
    if (err) throw err;
});
*/