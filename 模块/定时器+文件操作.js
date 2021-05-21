//练习：开启一次性定时器，3秒以后创建1~10,10个目录；15秒以后再把这10个目录删除。

const fs = require('fs');

setTimeout(function () {
    for (let i = 0; i < 10; i++) {
        fs.mkdirSync('./mydir'+i);
    }
    //创建成功后
    //开启定时器15s后再删除
    setTimeout(function () {
        for (let i = 0; i < 10; i++) {
            fs.rmdirSync('./mydir'+i);
        }
    }, 15000);
    
}, 3000);