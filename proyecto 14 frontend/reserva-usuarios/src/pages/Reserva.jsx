import { useEffect, useState } from "react";
import axios from "axios";
function Reserva(){
    const [reserva, setReserva]=useState([]);
    const lisReservas=async()=>{ 
        try{ 
        const respuesta=await axios.get('http://127.0.0.1:3000/api/');
        console.log(respuesta.data);  
        setReserva(respuesta.data);
        }
        catch(error){
          console.log(error);
        }
      }
      useEffect(()=>{
        lisReservas()
    },[])
    return(
        <div>
            <h1>Componente Reserva</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID user</th>
                        <th>fecha de la reserva</th>
                        <th>lugar</th>
                        <th>nombre de la reserva</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {reserva.map(reserva => (
                        <tr key={reserva.id}>
                            <td>{reserva.usuario_id}</td>
                            <td>{reserva.fechaReserva}</td>
                            <td>{reserva.lugar}</td>
                            <td>{reserva.nombreReserva}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Reserva;