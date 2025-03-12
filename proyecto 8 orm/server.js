//archivos de ejecución
const express = require('express');
const app = express();
app.use(express.json());
//env 
const dotenv = require('dotenv');
dotenv.config();

//ruta principal
const usuarioRouter=require('./router/usuarioRouter');
const roleRouter=require('./router/roleRouter');

app.use('/api',usuarioRouter)
app.use('/api',roleRouter)




//servidor 
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
