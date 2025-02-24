//ejecucion de express
const express = require('express');
const app = express();
const dotenv=require('dotenv');
dotenv.config();
app.use(express.json())

const usuarioRouter=require('./router/usuarioRouter');
const comentarioRouter=require('./router/comentariosRouter');


app.use('/api',usuarioRouter)
app.use('/api',comentarioRouter)

//servidor 
const PORT=process.env.PORT;

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
