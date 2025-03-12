//hooks useEffect

import { useEffect } from "react";

function Hooks(){ 
    useEffect(() => {
        console.log("Este es el componente useEffects hooks")
    },[]);
    return <h1>Este es el componente hooks</h1>
    
    
}

export default Hooks;