let personas=[
    {
        nombre:"lilian",
        genero:"femenino",
    },
    {
        nombre:"camilo",
        genero:"masculino",
        

    },
    {
        nombre:"constanza",
        genero: "femenino",
    },
]

let comparar="masculino";

function busqueda(){
    for (let i=0; i<personas.length; i++){
        if(personas[i].genero!=comparar){
            personas.splice(i,1);    
        }
}
    console.log(personas);
}

busqueda();