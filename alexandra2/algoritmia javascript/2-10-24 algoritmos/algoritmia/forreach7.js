
let btn=document.querySelector('#btn');
btn.addEventListener('click', ()=>{
    let inicio=document.querySelector('#inicio').value;
    let fin=document.querySelector('#final').value;
    llenarArreglo(inicio,fin);
})


function llenarArreglo(inicio,fin){
    let numeros=[];
    for(let i=inicio; i<=fin; i++){
        numeros[i]=i;
        //numeros.push(i); esta forma tambien es valida
    }
    recorrerArreglo(numeros);
}
function recorrerArreglo(numeros){
    numeros.forEach(numero=>{
        console.log(numero)
    })
}
llenarArreglo();