const {Roles,Usuario}=require('../models');

class RolesService {
    static async listarUsuarioRol(){
        try{
            return await Roles.findAll({includes:{model: Usuario, attributes:['nombre','correo']}})
        }catch(e){
            console.log("Error en servicio")
        }
    }
    static async guardarRoles(nombre){
        try{
            return await Roles.create({nombre})
        }catch(e){
            console.log("Error en servicio")
        }
    }
}

module.exports=RolesService;
