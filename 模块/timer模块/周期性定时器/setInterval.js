//周期性定时器每隔2s打印hello，打印3次后结束
let i = 0;
//开启定时器，每隔一段时间，调用一次回调函数
let timer = setInterval(function () {
    console.log('hello');
    i++;
    if (i == 3) {
        clearInterval(timer);//清除
    }
}, 2000);