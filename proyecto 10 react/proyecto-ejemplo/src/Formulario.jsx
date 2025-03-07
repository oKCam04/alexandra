import { useState } from "react";

function Formulario() {
    const [nombre, setNombre]=useState("");
    const [apellido, setApellido]=useState("");
    const [direccion, setDireccion]=useState("");
    const [telefono, setTelefono]=useState("");
    const [userName, setUserName]=useState("");
    const [contrasena, setContrasena]=useState("");
    return (
        <div>
          <h2>Registro de Usuario</h2>
          <form >
            
            <input type="text" placeholder="Escriba su nombre" onChange={(event)=>setNombre(event.target.value)} /><br /><br />
            <input type="text" placeholder="Escriba su apellido" onChange={(event)=>setApellido(event.target.value)} /><br /><br />
            <input type="text" placeholder="direccion" onChange={(event)=>setDireccion(event.target.value)} /><br /><br />
            <input type="text" placeholder="Telefono" onChange={(event)=>setTelefono(event.target.value)} /><br /><br  />
            <input type="text" placeholder="Username" onChange={(event)=>setUserName(event.target.value)} /><br /><br  />
            <input type="text" placeholder="contrasena" onChange={(event)=>setContrasena(event.target.value)} /><br /><br  />
            <h1>su nombre es {nombre}</h1>
            <h1>su apellido es {apellido}</h1>
            <h1>su direccion es {direccion}</h1>
            <h1>su telefono es {telefono}</h1>
            <h1>su usuario es {userName}</h1>
            <h1>su contrasena es {contrasena}</h1>
          </form>
        </div>
      );
    }
    
export default Formulario;
    
