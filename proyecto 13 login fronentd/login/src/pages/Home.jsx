import { useContext } from "react";
import { AppContext } from "../Contexts"; 
import Navbar from "../componentes/Navbar"; 

function Home() {
    const { userEmail, userPassword } = useContext(AppContext); 

    return (
        <div>
            <Navbar userEmail={userEmail} userpassword={userPassword} /> 
            <h1>Bienvenido a Home</h1>
            {userEmail && <p>Usuario: {userEmail}</p>}
            {userPassword && <p>Contraseña: {userPassword}</p>}
        </div>
    );
}

export default Home;

