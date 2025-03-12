import { useEffect } from "react";
import { useState } from 'react';

function Mensaje(){
    const [cont,setCont]=useState(0);
    useEffect(() => {
        console.log(`El contador está cambiando ${cont}`)
    },[cont]);
    
    return (
        <div>
            <p>Contador: {cont}</p>
            <button onClick={()=>setCont(cont+1)}>Incrementar</button>
        </div>

    )


}
export default Mensaje;