const fs = require('fs');

//创建可读取的文件流，返回对象
let rs = fs.createReadStream('./test.rar');

//创建将读取的文件流添加到可写入的文件流
let ws = fs.createWriteStream('./2.zip');
//管道，可以将读取流通过管道添加到写入流
rs.pipe(ws);


//添加事件，监听是否有数据流入内存
//on(参数1, 参数2 callback) 添加事件
//参数1：是一个字符串，表示事件名称，固定！
/*
data  数据流入
*/
//参数2：是一个回调函数，一旦触发事件，调用这个函数，在callback中获取流入的数据

let count = 0;
rs.on('data', (chunk) => {
    
    //chunk 获取的分段数据
    //console.log(chunk);
    count++;
});
//添加事件：读取结束事件
//一旦读取结束，就调用函数
rs.on('end', () => {
    console.log(count);//输出分段数据的段数
})
