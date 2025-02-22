const express = require('express');
const router = express.Router();
const BibliotecaController=require("../controller/bibliotecaController.js");

router.post("/biblioteca",BibliotecaController.registrarLibro);
router.put("/biblioteca/:id",BibliotecaController.actualizarLibro);
router.get("/biblioteca",BibliotecaController.mostrarLibros);
router.delete("/biblioteca/:id",BibliotecaController.eliminarLibro);
router.post("/prestamo",BibliotecaController.llenarPrestamo)
router.get("/prestamo",BibliotecaController.verPrestamos);
router.put("/prestamo/:id",BibliotecaController.modificarPrestamo);
module.exports = router;