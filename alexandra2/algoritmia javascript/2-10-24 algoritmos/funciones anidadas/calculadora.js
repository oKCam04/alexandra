//calculadora

document.querySelector('okay');
okay.addEventListener('click', ()=>{
    let num1=document.querySelector('#num1').value;
    let num2=document.querySelector('#num2').value;

    num1= parseInt(num1);
    num2=parseInt(num2);

    operaciones(num1,num2);
});


function operaciones(num1,num2){

suma(num1,num2);
resta(num1,num2);
multiplicacion(num1,num2);
division(num1,num2);

function suma(num1,num2){
    let sumar=num1+num2;
    console.log("su resultado es:"+sumar);
}

function resta(num1,num2){
    let restar=num1-num2;
    console.log("su resultado de la resta es:"+restar);
}

function multiplicacion(num1,num2){
    let multiplicacior=num1*num2;
    console.log("su resultado de la multiplicación:"+multiplicacior);
}

function division(num1,num2){
    let divisior=num1/num2;
    console.log("su resultado de la división es:"+divisior);
}

}
