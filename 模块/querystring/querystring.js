//在nodejs安装目录，npm下node_modules已有querystring（查询字符串）模块

//引入querystring模块
const querystring = require('querystring');


//查询字符串,不能有空格
let str = 'keyword=电脑&enc=utf-8';

//parse() 将查询字符串解析为对象
let obj = querystring.parse(str);
console.log(obj.keyword);

//练习
let str1 = 'lid=5&num=1';
let obj1 = querystring.parse(str1);
console.log(obj1.lid, obj1.num);