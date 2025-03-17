import React, {useState} from 'react';
function CrearUsuario(){
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const handleSubmit =()=> {
    }
    return(
        <div>
            <h1>Create Usuarios</h1>
            <form onSubmit={handleSubmit()} method="POST">
                <label >Nombre:</label>
                <input type="text" onChange={(event)=>setNombre(event.target.value)} placeholder="Escriba el nombre" />
                <label >Correo</label>
                <input type="text" onChange={(event)=>setCorreo(event.target.value)} placeholder="Escriba el correo" />
                <label >Contrasena:</label>
                <input type="text" onChange={(event)=>setContrasena(event.target.value)} placeholder="Escriba la contrasena" />
                <button type="submit">Registrar Usuario</button>
            </form>
        </div>
    )
}

export default CrearUsuario;