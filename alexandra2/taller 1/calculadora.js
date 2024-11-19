
num1=prompt("ingrese el primer numero: ");
num2=prompt("escribe el segundo número: ");

respuesta=prompt("Que operación desea realizar: 1.suma, 2.resta, 3.multiplicación, 4.divisón");

num1=parseInt(num1);
num2=parseInt(num2);

let suma=0;
let resta=0;
let multiplicacion=0;
let division=0;

suma=suma=num1+num2;
resta=num1-num2;
multiplicacion=num1*num2;
division=num1/num2;

if (respuesta==1){
    console.log(`la suma es ${suma}`);
}else if (respuesta==2){
    console.log(`la resta es ${resta}`);
}else if (respuesta==3){
    console.log(`multiplicación es: ${multiplicacion}`)
}else if (respuesta==4){
    console.log(`división es: ${division}`)
}
