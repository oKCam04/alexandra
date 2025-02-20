const express = require('express');
const router = express.Router();
const BibliotecaController=require("../controller/bibliotecaController.js");

router.post("/biblioteca",BibliotecaController.registrarLibro);
router.put("/biblioteca/:id",BibliotecaController.actualizarLibro);

module.exports = router;