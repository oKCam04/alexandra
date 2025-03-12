import { useRef } from "react";

function Referencia() {
    const reference=useRef(null);
    let enfocarInput=()=>{
        reference.current.focus();
        reference.current.style.backgroundColor="yellow";
       
    }
    return (
        <div>
            <h1>Ejemplo de Referencia</h1>
            <input ref={reference} type="text"/>
            <button onClick={enfocarInput}>Enfocar y desefoncar</button>
        </div>
    )
}

export default Referencia;