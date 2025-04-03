import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Contexts"; 

function Navbar() {
    const { userEmail, userPassword } = useContext(AppContext); 

    return (
        <nav>
            <Link to="/Home">Inicio</Link>
            <Link to="/Detalle">Detalle</Link>
            {userEmail && <span> Usuario: {userEmail} </span>}
            {userPassword && <span> | Contraseña: {userPassword} </span>}
        </nav>
    );
}

export default Navbar;

