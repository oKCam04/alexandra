//archivo de ejecución
const express = require('express');
const router=express.Router();
const UsuarioController=require('../controller/usuarioController')

router.get("/usuario",UsuarioController.listarUsuarios)
router.post("/usuario",UsuarioController.crearUsuario)
router.put("/usuario/:id",UsuarioController.actualizarUsuario)
router.delete("/usuario/:id",UsuarioController.eliminarUsuario)
router.get("/users/:correo",UsuarioController.buscarUsuario)


module.exports=router;