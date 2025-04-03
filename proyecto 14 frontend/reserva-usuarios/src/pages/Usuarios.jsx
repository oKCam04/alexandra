import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { createContext, useContext } from "react";

//1.crearContext
const UserContext = createContext(null);
function Usuarios(){
    const [users, setUsers]=useState([]);
    const [SelectedUser, setSelectedUser]=useState(null);
    const navigate=useNavigate();
    const listUser=async()=>{ 
        try{ 
        const respuesta=await axios.get('http://127.0.0.1:3000/apo/user');
        setUsers(respuesta.data);
        }
        catch(error){
          console.log(error);
        }
      }
      useEffect(()=>{
        listUser()
    },[])
    const selectUser=(index)=>{
        console.log(index);
        setSelectedUser(index);
        navigate('/UserDetail')
       
    }
    return (
        <UserContext.Provider value={{SelectedUser, setSelectedUser}}>
        <div>
            <h1>Componente Usuarios</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(index=>(
                        <tr key={index.id}>
                            <td>{index.nombre}</td>
                            <button onClick={()=>{selectUser(index)}}>ver detalle</button>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
        </UserContext.Provider>
    )
}

export default Usuarios;
export {UserContext} ;