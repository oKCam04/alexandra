
document.querySelector('ok');
ok.addEventListener('click', ()=>{
    let inicio=document.querySelector('#inicio').value;
    let final=document.querySelector('#final').value;
    par(inicio,final);
})

let contador=0;

 function par(inicio,final){
    let arreglo=[]
    for(let i=inicio;i<final;i++){
        arreglo[i]=i;
    }
    for (let i=0; i<arreglo.length;i++){

        if (arreglo[i]%2 ==0){
            contador =contador+1;
        
        }
    }
    console.log("Su número de pares es: "+contador);
}

par();