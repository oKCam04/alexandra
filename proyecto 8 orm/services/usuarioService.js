const {Usuario}=require('../models')
const {Roles}=require('../models')
const {Empresa}=require('../models')
class UsuarioService{
    static async listarUsuarios(){
    try{
        return await Usuario.findAll({include: [{ model: Roles},{ model: Empresa}]});
    }catch(e){
        console.log("error en la consulta")
    }    
    }

    static async crearUsuarios(nombre,correo,contrasena,idrole,idempresa){
    try{
        return await Usuario.create({nombre,correo,contrasena,idrole,idempresa})
    }catch(e){
        console.log("error en el servicio a guardar")
    }
    }

    static async eliminarUsuario(id){
        try{
            let resultadoB= await Usuario.findByPk(id);
            if (resultadoB){
                resultadoB.destroy();
                return "Usuario eliminado correctamente"
            }
            
        }catch(e){
            console.log("error en el servicio a eliminar")
        }
    }

    static async actualizarUsuario(id,nombre,correo,contrasena,idrole,idempresa){
        try{
            return await Usuario.update({nombre,correo,contrasena,idrole,idempresa},{where:{id}})
        }catch(e){
            console.log("error en el servicio a actualizar")
        }
    }

    static async buscarUsuario(correo){
        try{
            return await Usuario.findOne({where:correo});
        }catch(e){
            console.log("error en el servicio a buscar")
        }
    }

}

module.exports=UsuarioService;