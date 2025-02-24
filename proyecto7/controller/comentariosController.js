let db=require("../config/database.js");

class ComentariosController{
    static async obtenerComentarios(req,res){
        try{
            let [comentario]=await db.query('SELECT * FROM comentarios')
            res.json(comentario);
        }
        catch(e){
            res.json({mensaje:"error en la consulta"})
        }
        
    }
    static async insertarComentario(req,res){
        try{     
            let {tipo,descripcion,id_usuarios}=req.body;
            await db.query('INSERT INTO comentarios(descripcion,tipo,id_usuarios) VALUES(?,?,?)',[descripcion,tipo,id_usuarios]);
            res.json(req.body);
            
        }
        catch(e){
            res.json({mensaje:"error en la inserción de datos"})
        }
    }
    static async traerUsuario(req,res){
        let [usuario]=await db.query('select usuarios.nombre, comentarios.descripcion, comentarios.tipo from usuarios join comentarios on usuarios.id=comentarios.id_usuarios')
        res.json(usuario);
    }
    
}


module.exports=ComentariosController;