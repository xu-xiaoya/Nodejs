const express = require('express'); 

const app = express();
app.listen(8080);

app.get('/package/:pname', (req,res)=>{
    console.log(req.params);
    res.send('这是包的使用详情');
});