let personas=[
    {
        nombre:"lilian",
        edad: 36,
    },
    {
        nombre:"camilo",
        edad: 18,
        

    },
    {
        nombre:"constanza",
        edad: 35,
    },
]

let encontrar="lilian";

function busqueda(){
    for (let i=0; i<personas.length; i++){
        if(personas[i].nombre==encontrar){
            console.log("nombre encontrado: "+personas[i].nombre);
            
            break

         }else{
            console.log("no encontrado")
         }
}
   
}

busqueda();
