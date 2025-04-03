const {Paciente}=require('../models')

class PacienteService{
    static async listarPacientes(){
    try{
        return await Paciente.findAll();
    }catch(e){
        console.log("error en la consulta")
    }    
    }

    static async crearPaciente(nombre,apellido,direccion){
    try{
        return await Paciente.create({nombre,apellido,direccion})
    }catch(e){
        console.log("error en el servicio a guardar")
    }
    }

    static async eliminarPaciente(id){
        try{
            let resultadoB= await Paciente.findByPk(id);
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
            return await Paciente.update({nombre,apellido,direccion},{where:{id}})
        }catch(e){
            console.log("error en el servicio a actualizar")
        }
    }

    
}

module.exports=PacienteService;