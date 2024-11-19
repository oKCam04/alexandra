let positivoNegativo = (num) => {
    let resultado = (num>0)?'positivo': (num<0)?'negativo':"cero";
    return resultado;
 
}

console.log(positivoNegativo(0));
console.log(positivoNegativo(2));
console.log(positivoNegativo(-5));