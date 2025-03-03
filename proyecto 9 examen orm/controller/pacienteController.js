const PacienteService = require('../services/pacienteService');
class PacienteController{
    static async listarPacientes(req,res){
        try{
            let lista=await PacienteService.listarPacientes();
            res.json(lista);
        }catch(e){
            res.json({error:"error en la peticion"})
        }

    }
    static async crearPaciente(req,res){
        try{
            let {nombre,apellido,direccion}=req.body;
            let usuario=await PacienteService.crearPaciente(nombre,apellido,direccion);
            res.json(req.body);
        }catch(e){
            res.json({error:"error en la peticion"})
        }
    }

    static async eliminarPaciente(req,res){
        try{
            let {id}=req.params;
            await PacienteService.eliminarPaciente(id);
            res.json({mensaje:"Usuario eliminado exitosamente"})
        }catch(e){
            res.json({error:"error en la peticion"})
        }
    }
    static async actualizarPaciente(req,res){
        try{ 
            let {id}=req.params;
            let {nombre,apellido,direccion}=req.body;
            await PacienteService.actualizarPaciente(id,nombre,apellido,direccion);
            res.json(req.body);
        }catch(e){
            res.json({error:"error en la peticion"})
        }
    }
    
}
module.exports = PacienteController;