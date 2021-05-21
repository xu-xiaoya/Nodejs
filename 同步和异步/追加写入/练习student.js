//练习：创建数组，数组多个姓名，将姓名使用异步方式写入到stu.txt中
const fs = require('fs');

let a = ['tom', 'jerry', 'jack', 'donna'];
for (let i in a) {
    fs.appendFile('./stu.txt', a[i]+'\n', (err) => {
        if (err) throw err;
    });
}