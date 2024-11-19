
let numeros=[2,6,7,5,9];
let contador=0;

function suma(){
    for (let i=0; i<numeros.length;i++){
        contador=contador+numeros[i];
    }
    console.log("la suma es: "+contador)
}

suma();