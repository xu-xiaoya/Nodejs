const fs = require('fs');

//检测该路径是否存在
if (fs.existsSync('./mydir')) {
    fs.rmdirSync('./mydir');
} else {
    fs.mkdirSync('./mydir');
}