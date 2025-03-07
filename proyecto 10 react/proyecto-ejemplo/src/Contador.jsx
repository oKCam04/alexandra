import { useState } from "react";
function Contador(){
    const [cont,setCont]=useState(0);
    return (
        <div>
            <h2>Contador: {cont}</h2>
            <button onClick={()=>setCont(cont+1)}>Incrementar</button><button onClick={()=>setCont(0)}>Bajar</button>
        </div>

    )
}

export default Contador;