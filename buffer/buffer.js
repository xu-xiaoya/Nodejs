//Buffer缓冲器

//中文占3个字节
let buf = Buffer.alloc(6,'abc雅');  //创建Buffer，大小6字节
console.log(buf.toString());    //将Buffer转换为字符串