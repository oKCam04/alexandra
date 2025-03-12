//archivos de ejecución
const express=require('express');
const app=express();

const env=require('dotenv');
env.config();






//server 
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log('Servidor en el puerto:',PORT);
})