
class ReservaServices{
    static async listarReserva(){
        try{
            return await reserva.findAll()
        }catch(e){
            console.log("Error en services")
        }
    }
    
}


module.exports=ReservaServices;