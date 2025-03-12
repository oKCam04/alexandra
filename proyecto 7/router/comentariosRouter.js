//ejecucion
const express=require("express");
const router=express.Router();
const ComentarioRouter=require("../controller/comentariosController.js");

router.get("/comentario",ComentarioRouter.obtenerComentarios);
router.post("/comentario",ComentarioRouter.insertarComentario);
router.get("/combi",ComentarioRouter.traerUsuario);


module.exports=router;