function calcularArea(numeropi,radio){
    let resultado=numeropi*(radio*radio);
    return resultado;
}

function mostrarArea(numeropi,radio){
    //llamar
    let area=calcularArea(numeropi,radio);
    console.log(area);
}
mostrarArea(3.1416,5);