//定时器setTimeout
//先执行主程序，再执行事件队列（由一组回调函数组成）

var timer = setTimeout(function () {
    //回调函数，会先放在事件队列中
    console.log('boom');
}, 3000);


//先执行主程序，先打印1
console.log(1);


//清除，立刻清除
clearTimeout(timer);