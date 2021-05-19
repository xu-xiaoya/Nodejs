//引入yan.js模块
//引入同一级的模块写路径 ./
//引入模块得到的是该模块导出的对象
var obj = require('./yan.js');
//使用另一个模块中的变量和函数
console.log(obj);
console.log(obj.ma, obj.mfn());