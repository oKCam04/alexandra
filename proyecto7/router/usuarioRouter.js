const express=require('express');
const router=express.Router();
const UsuarioController=require('../controller/UsuarioController');

router.get("/usuario",UsuarioController.obtenerUsuario);
router.post("/usuario",UsuarioController.agregarUsuario)


module.exports=router;