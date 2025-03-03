const RoleService= require('../services/roleServices');
class RoleController{

    static async listarRoles(req,res){
        try{
            let lista=await RoleService.listarUsuarioRol();
            res.json(lista);
        }catch(e){
            res.json({error:"error en la petición"})
        }
    }
    static async guardarRoles(req,res){
        try{
            let {nombre}=req.body;
            let rol=await RoleService.guardarRoles(nombre);
            res.json(req.body);
        }catch(e){
            res.json({error:"error en la petición"})
        }
    }


}

module.exports=RoleController;