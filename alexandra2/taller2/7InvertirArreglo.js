
let arreglo=["h","g","a","d"];
let invertido=[];

let cantidad=arreglo.length-1;

function invertir(){
    for(let o=cantidad; o>=0;o--){
        invertido.push(arreglo[o])
    }
    console.log(arreglo)
    console.log(invertido)
}

invertir();