import { useEffect } from "react";

function Funcionalidad(){
    useEffect(() => {
        console.log("Este es el componente Funcionalidad")
    },[]);
    return <h1>Este es el componente Funcionalidad</h1>
}


export default Funcionalidad;