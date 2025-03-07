import { useState } from "react";

function NombreUsuario(){
    const [nombre, setNombre]= useState("");
    return (
        <div>
            <input type="text" placeholder="Escriba su nombre"
            onChange={(event)=>setNombre(event.target.value)} />
            <h1>El nombre es:{nombre}</h1>
        </div>
    )
}

export default NombreUsuario;