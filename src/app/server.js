const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/arr'));
app.get('/*',(req,res)=> res.sendFile('index.html',{ShadowRoot:'dist/arr'}));
    app.listen(process.env.PORT || 8000);

