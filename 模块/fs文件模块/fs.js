//运行该文件需要在当前文件目录下运行 cd C:\Users\lenovo\Desktop\git\Nodejs\模块\fs文件模块  再node

//引入文件系统模块
const fs = require('fs');

//查看文件的状态
let s = fs.statSync('./04');
console.log(s);


//查看文件是否为目录形式
console.log( s.isDirectory() );
//是否为文件形式
console.log( s.isFile() );


//创建目录（同步，会阻止后续程序执行）
fs.mkdirSync('./mydir');
//删除目录
fs.rmdirSync('./mydir'); 