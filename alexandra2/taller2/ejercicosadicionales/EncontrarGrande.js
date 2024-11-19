

let numeros=[1,3,5];
let mayor=numeros[1];
let mayor2=0;

function Nmayor(){
    for (let i=0; i<numeros.length;i++){
        if(numeros[i]>mayor){
            mayor2=numeros[i]
        }
    }
    console.log("Su numero mayor: "+mayor2)
}

Nmayor();