


let ok=document.querySelector("#ok");


ok.addEventListener('click', ()=>{
    let n1=document.querySelector("#num1").value;
    let n2=document.querySelector("#num2").value;
    n1=parseInt(n1);
    n2=parseInt(n2);
    let suma=n1+n2;
    document.querySelector("#resultado").value=suma;
    ok.value=suma;
    
    alert(suma);
});
