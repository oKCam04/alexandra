
let arreglo=[1,5,3,7,9];
let buscador=3;
let indices=0;

function indice(){
    for (let i=0;i<arreglo.length;i++){
        if(arreglo[i]==buscador){
            indices=i;
            break
        }
    }
    console.log("Su indice está en la posición: "+indices);

}

indice();