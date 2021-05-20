/*练习：获取以下url中传递的查询字符串数据，打印出
班级编号：2104, 
课程名称：nodejs
*/

//引入url、模块
const url = require('url');
const querystring = require('querystring');

let str1 = 
'https://www.tmooc.cn:443/web/course.html?cid=2104&cname=nodejs'
let obj1 = url.parse(str1);
let query = obj1.query;

/*
法一：数组split切割存储实现
let a = query.split('&');   //将查询字符串劈开为数组
let o = {};
for (let i = 0; i < a.length; i++) {
    let n = a[i].indexOf("=");  
    if (n == -1) continue;
    let  x = a[i].substring(0,n);
    let  y = a[i].substring(n+1);
    o[x] = unescape(y);
}
//console.log(o);
*/
//法二：直接使用querystring模块
const o = querystring.parse(query);

console.log(`
班级编号：${o.cid}, 
课程名称：${o.cname}
`);