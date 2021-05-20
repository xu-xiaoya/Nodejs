console.log("emodule");

var a = 1;
function fn() {
    return 2;
}

//module.exports 就是导出对象，默认是一个空对象
//往导出对象中添加要导出的内容
module.exports = {
    ma: a,
    mfn: fn
}