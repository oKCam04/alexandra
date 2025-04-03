import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Contexts"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUserEmail, setUserPassword } = useContext(AppContext);

  const handleLogin = (event) => {
    event.preventDefault();
    if (email === "admin@gmail.com" && password === "1234") {
      alert("Credenciales correctas");
      setUserEmail(email); 
      setUserPassword(password); 
      navigate("/Home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Correo</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} required />
        <label>Contraseña</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Aceptar</button>
      </form>
    </div>
  );
}

export default Login;
