import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
            const respuesta = await axios.post("http://127.0.0.1:3000/apo/login", { 
                correo: email, 
                password: password 
            });
            
            if (respuesta.data.mensaje === "Credenciales correctas") {
                alert("Inicio de sesión exitoso");
                navigate("/Home");
            } else {
                alert("Credenciales incorrectas");
            }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>Correo</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <label>Contraseña</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Aceptar</button>
            </form>
        </div>
    );
}

export default Login;
