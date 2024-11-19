
let numero1=30;
let numero2=30;
let numero3=30;

let mayor=0;

if (numero1>numero2 && numero1>numero3){
    mayor=numero1;
} else if (numero2>numero1 && numero2>numero3){
    mayor=numero2;
}else if (numero3>numero1 && numero3>numero2){
    mayor=numero3;
}else if (numero1==numero2 && numero2==numero3 && numero1==numero3){
    console.log("Todos son iguales")
}
console.log("El mayor es: "+mayor);