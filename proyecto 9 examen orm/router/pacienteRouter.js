//archivo de ejecución
const express = require('express');
const router=express.Router();
const PacienteRouter=require('../controller/pacienteController')

router.get("/paciente",PacienteRouter.listarPacientes)
router.post("/paciente",PacienteRouter.crearPaciente)
router.put("/paciente/:id",PacienteRouter.actualizarPaciente)
router.delete("/paciente/:id",PacienteRouter.eliminarPaciente)



module.exports=router;
