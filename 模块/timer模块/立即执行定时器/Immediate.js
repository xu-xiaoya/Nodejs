console.log(2);
//立即执行定时器，放在最后执行，解决nodejs单线程中遇到耗时的操作
setImmediate(()=>{
    console.log(1);
})
console.log(3);

//2 3 1