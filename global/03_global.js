var a = 1;
function fn() {
  return 2;
}
//报错，都不是全局下的
//在js浏览器环境下是全局变量window对象，但是在nodejs中脚本var变量是局部变量，避免全局污染
console.log( global.a );
console.log( global.fn() );