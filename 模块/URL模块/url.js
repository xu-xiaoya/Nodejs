//引入URL模块
const url = require('url');


let str = 
'http://www.codeboy.com:9999/product_detail.html?lid=5';

//parse() 将URL解析为对象 
let obj = url.parse(str);
console.log(obj);