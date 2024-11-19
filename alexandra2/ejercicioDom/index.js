// document.querySelector("#ok").addEventListener("click",function(){
//     alert("Estoy haciendo click");
//     let s=document.querySelector("#inputSaludo").value;
//     alert("este es el valor del input "+s)
// });

document.querySelector("#Aceptar").addEventListener("click",function(){
    
    let num1=document.querySelector("#Nombre").value;
    let num2=document.querySelector("#Apellido").value;
    num1= parseInt(num1);
    num2=parseInt(num2);
    document.querySelector("#rest").value=num1*num2;
});

document.querySelector("#Delete").addEventListener("click", function(){
    document.querySelector("#Nombre").value=" ";
    document.querySelector("#Apellido").value=" ";
    document.querySelector("#rest").value=" ";
}

)