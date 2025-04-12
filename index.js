import express from 'express';

const app = express();


app.get('/',(req,res)=>{
    res.send('hola maria')
})


const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log('servidor funcionando en el port: ',port)
})