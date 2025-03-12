let db=require("../config/database.js");
 
class BibliotecaController{

//metodos libro

static async registrarLibro(req,res){ //Registro de libro
    let {titulo,autor,anio_publicacion,disponibilidad}=req.body; //datos para registrar libro en el mysql
    let libro= await db.query("Insert Into libro(titulo, autor, anio_publicacion, disponibilidad) VALUES (?,?,?,?)",[titulo,autor,anio_publicacion,disponibilidad]); //Comando para insertar los datos 
    res.json(req.body); //Respuesta con los datos ingresados
}

static async actualizarLibro(req,res){
    let {id}=req.params;
    let {titulo,autor,anio_publicacion,disponibilidad}=req.body;
    await db.query("UPDATE libro SET titulo=?, autor=?, anio_publicacion=?, disponibilidad=? where id=?",[titulo,autor,anio_publicacion,disponibilidad,id]);
    res.json(req.body);
}
static async mostrarLibros(req,res){
    let [lista]=await db.query("SELECT * FROM libro");
    res.json(lista);
}
static async eliminarLibro(req,res){
    let {id}=req.params;
    await db.query("DELETE FROM libro WHERE id=?",[id]);
    res.send({message:"datos eliminados"});
}

//metodos prestamo
static async llenarPrestamo(req,res){
    let {fechaPrestamo,prestamoTotales,idlibro,devolucion,devuelto}=req.body;
    let prestamo= await db.query("INSERT INTO prestamos(fechaPrestamo, prestamoTotales, idlibro, devolucion, devuelto) VALUES (?,?,?,?,?)",[fechaPrestamo,prestamoTotales,idlibro,devolucion,devuelto]);
    res.json(req.body);
}
static async verPrestamos(req,res){
    let [libro]=await db.query("SELECT * FROM prestamos");
    res.json(libro);
}
static async modificarPrestamo(req,res){
    let {id}=req.params;
    let {fechaPrestamo,prestamoTotales,idlibro,devolucion,devuelto}=req.body;
    await db.query("UPDATE prestamos SET fechaPrestamo=?, prestamoTotales=?, idlibro=?, devolucion=?, devuelto=? where id=?",[fechaPrestamo,prestamoTotales,idlibro,devolucion,devuelto,id]);
    res.json(req.body);
}
}
module.exports=BibliotecaController;