const express = require('express'); 

const app = express();
app.listen(8080);

//:lid、:count、:uid为三组形参，严格按照格式进行查询
app.get('/shopping/:lid&:count&:uid', (req, res)=>{
    //console.log(req.params);
    res.send(`
        商品的编号：${req.params.lid}<br>
        购买的数量：${req.params.count}<br>
        用户的编号：${req.params.uid}
    `)
});

//   /shopping/30&1&5