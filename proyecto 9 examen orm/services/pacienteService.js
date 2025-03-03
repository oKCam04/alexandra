const {paciente}=require('../models')

class PacienteService{
    static async listarPacientes(){
    try{
        return await paciente.findAll();
    }catch(e){
        console.log("error en la consulta")
    }    
    }

    static async crearPaciente(nombre,apellido,direccion){
    try{
        return await Usuario.create({nombre,apellido,direccion})
    }catch(e){
        console.log("error en el servicio a guardar")
    }
    }

    static async eliminarPaciente(id){
        try{
            let resultadoB= await paciente.findByPk(id);
            if (resultadoB){
                resultadoB.destroy();
                return "Usuario eliminado correctamente"
            }
            
        }catch(e){
            console.log("error en el servicio a eliminar")
        }
    }

    static async actualizarPaciente(id,nombre,apellido,direccion){
        try{
            return await Usuario.update({nombre,apellido,direccion},{where:{id}})
        }catch(e){
            console.log("error en el servicio a actualizar")
        }
    }

    
}

module.exports=PacienteService;