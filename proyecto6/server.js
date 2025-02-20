//archivo de ejeción 
const express = require('express');
const app = express();
const bibliotecaRouter=require("./router/bibliotecaRouter")
app.use(express.json());

//mildeware
app.use("/Book",bibliotecaRouter);









//configuración del servidor

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});