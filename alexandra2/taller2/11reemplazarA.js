//  document.querySelector("#Enviar").addEventListener("click",function(){
//      let dato =document.querySelector("#Dato").value;
//      let Indice=document.querySelector("#indice").value;

//         let indice=parseInt(Indice);

// });

// let reemplazo=document.querySelector("#Dato").value;
// let ini=document.querySelector("#indice").value;
// let indice=parseInt(ini);
let indice=2;
let reemplazo="holaaaa";
let arreglo=["h","o","l","a"]

function reemplazar(){
    arreglo[indice]=reemplazo;
    console.log(arreglo)
}
reemplazar();