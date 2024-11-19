

let numeros=[3,1,5,6,666,88];
let mayor=numeros[0];


function Nmayor(){
    for (let i=0; i<numeros.length;i++){
        if(numeros[i]>mayor){
            mayor=numeros[i]
        }
    }
    console.log("Su numero mayor: "+mayor)
}

Nmayor();