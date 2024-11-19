
let calcularDescuento = (precio) => {
    let descuento=(precio>1000)?precio*0.80:(precio>=500 & precio<=1000)?precio*0.90:"su descuento no se aplica";
    return descuento;
}


export default calcularDescuento;