const fs = require('fs');

//同步删除文件fs.unlinkSync(path)
fs.unlinkSync('./1.txt');

//异步fs.unlink(path, callback)
fs.unlink('./2.txt', (err) => {
    if (err) throw err;
    console.log('异步删除成功');
});