//如果文件不存在，先创建文件然后写入数据
//如果文件存在，会在文件末尾追加写入数据

const fs = require('fs');


//同步追加写入文件，有Sync
fs.appendFileSync('./main.txt', 'erya');

//异步追加写入文件，要回调函数
fs.appendFile('./1.txt', '\nerya2', (err)=>{
    if (err) throw err;
    console.log('异步写入成功');
});