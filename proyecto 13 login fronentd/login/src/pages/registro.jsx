import {useState} from "react"
function Registro() {
    const [nombre, setNombre]=useState("");
    const [apellido, setApellido]=useState("");
    const [direccion, setDireccion]=useState("");
    const [telefono, setTelefono]=useState("");
    const [correo, setCorreo]=useState("");
    const [contrasena, setContrasena]=useState("");
    return (
   
        <div>
            <form>
                <label >Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />

                <label >Apellido:</label>
                <input type="text" id="apellido" name="apellido" required />

                <label >Dirección:</label>
                <input type="text" id="direccion" name="direccion" required />

                <label >Teléfono:</label>
                <input type="tel" id="telefono" name="telefono" required />

                <label >Correo Electrónico:</label>
                <input type="email" id="correo" name="correo" required />

                <label >Contraseña:</label>
                <input type="password" id="contrasena" name="contrasena" required />

                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default Registro;
