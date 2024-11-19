let numeros=[10,20,30,40,50];
for (let i=0;i<numeros.length; i++){
    console.log(numeros[i]);
}
numeros.forEach((numero)=>{
    console.log("forEach"+numero);
})
let numerosTerminado5=[5,15,25,35,45];
let suma=0;
for (let i=0; i<numerosTerminado5.length; i++){
    suma= suma+numerosTerminado5[i]; //20
}
console.log(suma);


let result=0;
numerosTerminado5.forEach((num5)=>{
    result= result+num5;
    console.log(result);
});