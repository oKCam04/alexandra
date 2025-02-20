let db=require("../config/database.js");
 
class BibliotecaController{

static async registrarLibro(req,res){
    let {titulo,autor,anio_publicacion,disponibilidad}=req.body;
    let libro= await db.query("Insert Into libro(titulo, autor, anio_publicacion, disponibilidad) VALUES (?,?,?,?)",[titulo,autor,anio_publicacion,disponibilidad]);
    res.json(libro);
}
static async actualizarLibro(req,res){
    let {id}=req.params;
    let {titulo,autor,anio_publicacion,disponibilidad}=req.body;
    await db.query("UPDATE libro set titulo=?, autor=?, anio_publicacion=?, disponibilidad=? where id=?"[titulo,autor,anio_publicacion,disponibilidad,id]);
    res.json(req.body);
}

}
module.exports=BibliotecaController;