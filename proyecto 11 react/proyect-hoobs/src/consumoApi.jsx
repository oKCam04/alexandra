import { useState } from "react";
import { useEffect } from "react";
import "./estilo.css";

function ConsumoApi(){
    const [usuarios,setUsuarios]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsuarios(data))
    },[]);
    return (
        <div>
            <h1 className="h1">Lista de usuarios</h1>
            <table className="tablaUser">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Username</th>
                        <th>option</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr>
                            <td>{usuario.id}</td>
                            <td>{usuario.name}</td>
                            <td>{usuario.username}</td>
                            <td><button className="edit">Edit</button><button className="delete">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ConsumoApi;