//Buffer缓冲器  在内存临时存储数据的区域，常用于保存网络传输时的资源

//中文占3个字节
let buf = Buffer.alloc(6,'abc雅');  //创建Buffer，大小6字节
console.log(buf.toString());    //将Buffer转换为字符串