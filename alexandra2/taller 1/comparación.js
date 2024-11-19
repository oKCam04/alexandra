
numero1=prompt("Ingrese el número 1: ");
numero2=prompt("Ingrese el número 2: ");
numero3=prompt("Ingrese el número 3: ");

numero1=parseInt(numero1);
numero2=parseInt(numero2);
numero3=parseInt(numero3);

let mayor=0;

if (numero1>numero2 && numero1>numero3){
    mayor=numero1;
}else if (numero2>numero1 && numero2>numero3){
    mayor=numero2;
}else if (numero3>numero1 && numero3>numero2){
    mayor=numero3;
}

console.log(`el número más alto es ${mayor}`)