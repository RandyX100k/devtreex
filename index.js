import express from 'express'

const app = express();



//routing
app.get('/',(req,res)=>{
    res.send('hola')
})



const port = process.env.PORT || 4000

app.listen(port,()=>{
    console.log(`servidor iniciado en el puerto ${port}`)
})