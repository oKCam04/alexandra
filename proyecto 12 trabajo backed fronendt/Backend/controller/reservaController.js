const ReservaService=require('../services/reservaServices')


class ReservaController{
    
    static async listarRoles(req,res){
        try{
            let lista=await ReservaService.listarReserva();
            res.json(lista);
        }catch(e){
            res.json({error:"error en la petición"})
        }
    }
}