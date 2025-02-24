const db=require("../config/database.js");

class UsuarioController{
    static async obtenerUsuario(req,res){
        try {
            let [usuario] = await db.query("SELECT * FROM usuarios")
            res.json(usuario);
        }
        catch(e){
            res.json({mensaje:"error en la consulta obtener obtener usuario"});
        }
    }
    static async agregarUsuario(req,res){
        try{
            let {nombre,correo,password}=req.body;
            await db.query("INSERT INTO usuarios(nombre, correo, password) VALUES (?,?,?)",[nombre,correo,password]);
            res.json(req.body);
        }
        catch(e){
            res.json({mensaje:"error al agregar usuario"});
        }
    }
}




module.exports=UsuarioController;