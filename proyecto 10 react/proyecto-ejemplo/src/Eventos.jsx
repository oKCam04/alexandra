
function Eventos(){
    function mostrarAlerta(){
        alert("Esta es una alerta de react")
    }
    const hover = ()=>{
        console.log("estas cerca del componente");
        // alert("Estas tocandome")
    }
    const handleSubmit=()=>{
        console.log("Estoy enviando datos")
        alert("has enviado datos")
    }
    const blur=()=>{
        alert("estás moviendo el blur")
    }
    const dobleclick=()=>{
        alert("estás moviendo el dobleclick")
    }
    const focus=()=>{
        alert("estás moviendo el focus")
    }
    const keydow=()=>{
        alert("estás moviendo el keydow")
    }
    const keyup=()=>{
        alert("estás moviendo el keyup")
    }

    return(
        <div>
        <button onClick={mostrarAlerta}>click</button>
        <div
            onMouseEnter={hover}
            onMouseLeave={()=>console.log("estás lejos del componente")}
            
        onDoubleClick={dobleclick}
        >Pasa el mouse por aqui!!!

        </div>
        <div>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Escriba su nombre completo"  onFocus={focus}/>
                <input type="text" placeholder="Diga a" onBlur={blur} />
                <input type="text" placeholder="aaa" onKeyDown={keydow} />
                <input type="text" placeholder="aaa" onKeyUp={keyup} />
                <button type="submit">Enviar</button>
            </form>
        </div>
        </div>
    )
}

export default Eventos;