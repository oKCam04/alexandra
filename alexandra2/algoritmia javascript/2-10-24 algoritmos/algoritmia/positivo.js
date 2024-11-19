let numero = prompt ("digitar su nota: ");
console.log(numero);

let num1= parseFloat(numero)

// if (num1>0){
//     console.log("positivo");
// } else if (num1<0) {
//     console.log("negativo")
// } else{
//     console.log("invalido")
// }

// else if (num1==null) { } forma de validar si es nulo 

//determinar si una nota de un examen es aceptable o inaceptable 
//teniendo en cuenta si es mayor de 3.5 es acepta lo contrario inaceptable

if (numero>0 && numero<3.5){
    console.log("su nota no es aceptable")
} else if (numero>3.4 && numero<5.1){
    console.log("tu nota es aceptable")
} else if (!numero){
    console.log("numero incorrecto o vacío")
}

//else if (!numero || numero===nul || nota="") {} lo valida como vacio