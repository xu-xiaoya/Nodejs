//计时 
//比较循环10000次for while dowhile的运行时间

console.time('while');
for (var i = 0; i < 100000; i++) {

}
console.timeEnd('while');//1.877ms

console.time('dowhile');
var i = 0;
do {
    i++;
}while(i < 100000);
console.timeEnd('dowhile');//1.164ms

console.time('while');
var i = 0;
while(i < 100000) {
    i++;
}
console.timeEnd('while');//1.055ms