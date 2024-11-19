//por medio de un pront llenar el arreglo original, 
//con los datos que se requiera
// let numterm5=[];
// let num1= prompt("ingrese el numero 1 de la lista");
// let num2= prompt("ingrese el numero 2 de la lista");
// let num3= prompt("ingrese el numero 3 de la lista");
// let num4= prompt("ingrese el numero 4 de la lista");
// let num5= prompt("ingrese el numero 5 de la lista");

// let nm1= parseInt(num1);
// let nm2= parseInt(num2);
// let nm3= parseInt(num3);
// let nm4= parseInt(num4);
// let nm5= parseInt(num5);

// numterm5.push(nm1);
// numterm5.push(nm2);
// numterm5.push(nm3);
// numterm5.push(nm4);
// numterm5.push(nm5);
// let suma=0;
// numterm5.forEach((number)=>{
//     suma= suma+number;
//     console.log(suma);
// })

//otra forma

let original=[1,1,1,1,1];
let tamaño=5;
let datosA=null;
// for (let i=0; i<5; i++){
//      datosA=prompt("digite dato del arreglo");
//      original.push(datosA);
//  }
//  console.log(original);

original.forEach((arr, index)=>{//original[i]
    datosA=prompt("digite dato del arreglo");
    original[index]=datosA;
});
console.log(original);