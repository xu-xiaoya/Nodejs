//如果文件不存在，先创建文件然后写入数据
//如果文件存在，先清空文件的内容，然后写入数据

const fs = require('fs');

//同步写入文件，有Sync
fs.writeFileSync('./1.txt', 'erya');

//异步写入文件，要回调函数
fs.writeFile('./2.txt', 'erya2', (err)=>{
    if (err) throw err;
    console.log('异步写入成功');
});