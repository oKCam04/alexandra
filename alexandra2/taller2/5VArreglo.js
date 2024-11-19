
let arreglo=[2,5,6,4];
let comparador=0;
let numero=6;

function comparar(){
    for(let i=0; i<arreglo.length;i++){
        if(numero==arreglo[i]){
            // comparador=arreglo[i]
            console.log("Su numero fue encontrado")
            break
        }else{
            console.log("Su numero no fue encontrado")
        }
    }

}
comparar();