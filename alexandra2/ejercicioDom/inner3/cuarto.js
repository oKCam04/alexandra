//creacion del elemento
//create element

let nuevoE=document.createElement('div');
nuevoE.textContent = "soy un elemento, nuevo, nuevito";
document.body.appendChild(nuevoE);
nuevoE.remove();

let nuevoE2=document.createElement('input');
nuevoE2.value="soy una cotanza";
document.body.appendChild(nuevoE2);


let nParrafo= document.createElement('p');	
nParrafo.textContent="este es un parrafo";
document.body.appendChild(nParrafo);

let ndiv= document.createElement('div');
ndiv.textContent="Este es un nuevo div";
nParrafo.parentNode.replaceChild(ndiv,nParrafo);