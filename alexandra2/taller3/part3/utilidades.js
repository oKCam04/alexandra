
let categoriaIMC= (masa)=>{
    let categoria=(masa>=25 & masa<=29.9)?"sobrepeso":(masa>=18.5 & masa<=24.9)?"Normal":(masa>=30)?"obesidad":"baja peso";
    return categoria;
}

export default categoriaIMC;