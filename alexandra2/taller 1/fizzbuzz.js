let digito=0;
digito=prompt("Ingresa un número de 1 al 100: ");
digito=parseInt(digito);

if (digito%3==0 && digito%5==0){
    console.log("FizzBuzz");
} else if(digito%3==0){
    console.log("Fizz");
} else if (digito%5==0){
    console.log("Buzz");
}