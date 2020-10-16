// express路由分发的例子
const express = require('express');

const app = express();

app.get('/favicon.ico',function(req,res){

});

app.get('/',function(req,res){
    res.writeHead(200);
    res.end();
})

app.listen(3000);


app.bind({blink});

