let numero1 = prompt("ingrese el primer numero");
let numero2 = prompt("ingrese el segundo numero");
let decision = prompt("1:suma, 2:resta, 3:multiplicacio, 4:division");



let num1= parseInt(numero1);
let num2= parseInt(numero2);

function suma(num1, num2){
    let sumar= num1+num2;
    return sumar;

}
function resta(num1, num2){
    let restar= num1-num2;
    return restar;
}

function multiplicacion(num1, num2){
    let multiplicar= num1*num2;
    return multiplicar;
}
function division(num1, num2){
    let dividir= num1/num2;
    return dividir;
}

if (decision=1){
    suma(num1,num2);
    console.log(sumar)
}
else if(decision=2){
    console.log(restar)
}
else if (decision=3){
    console.log(multiplicar)
}
else if (decision=4){
    console.log(dividir)
}