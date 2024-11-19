let divC=document.getElementById("contenedor");

divC.innerHTML=`
<input type="text" placeholder="Escriba nombre"/>

`;

let div2=document.getElementsByClassName("ejemplo");

let ejemplo=div2[0];
ejemplo.innerHTML="hola, como estás";

let div3=document.querySelector("#ejemplo2");

div3.innerHTML=`
<ol>
        <li>hola</li>
        <li>como estás</li>
</ol>

`