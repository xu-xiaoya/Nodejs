//global 检测一个变量或者函数是否为全局的
//交互模式属于全局作用域，创建的函数和声明的变量是全局的
//每个脚本文件都是在一个作用域下，里边的函数和变量都是局部的，不存在全局污染
//JS下的global叫做window


var a = 1;
function fn() {
  return 2;
}
//报错，都不是全局下的
//在js浏览器环境下是全局变量window对象，但是在nodejs中脚本var变量是局部变量，避免全局污染
console.log( global.a );
console.log( global.fn() );