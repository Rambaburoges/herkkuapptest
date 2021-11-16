const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/task'));
app.get('/*',(req,res)=> res.sendFile('index.html',{ShadowRoot:'dist/task'}));
    app.listen(process.env.PORT || 8000);

