const express = require('express');

const app = express();



//routing
app.get('/',(req,res)=>{
    res.send('hola')
})


app.get('/ecomerce',(req,res)=>{
    res.send('ecomerce')
})


app.get('/test',(req,res)=>{
    res.send('test')
})

app.listen(4000,()=>{
    console.log('servidor iniciado')
})