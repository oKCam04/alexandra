let numeros = [];//arreglo vacío
let vocales = ["a","e","i"];

console.log(vocales[2]);
console.log(vocales.length);//tamaño de mi arreglo
console.log(vocales);//el arreglo con sus datos

vocales.push("o");//agregar a la lista
vocales.push("u");
console.log(vocales);

//pop elimina el utilo elemento del arreglo 
vocales.pop();
console.log(vocales);
console.log("tamaño",vocales.length);

//unshift agrega al incio
vocales.unshift("AA");

//Shift eliminar el primer elemento del arreglo 
vocales.shift();


//includes mirar si hay un elemento 
let pintores = ["Picasso", "Van gogh", "Dali", "Miguel Angel "];
pintores.includes("Picasso ")

function sumarNumeros (){
    let suma=0;
    for (let i=0; i<=5;i++){
        suma=suma+i;

    }
    console.log("normal"+suma);
}
sumarNumeros();
let sumarNumeros2= () => {
    let suma=0;
    for (let i=0; i<=5;i++){
        suma=suma+i;

    }
    console.log("normal"+suma);
}

sumarNumeros();


