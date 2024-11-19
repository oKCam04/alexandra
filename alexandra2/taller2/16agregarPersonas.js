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

nam="Fernanda";
anos=25;

function agregarPersona(){
   let perona={nombre:nam, edad:anos};
   personas.push(perona);
   console.log(personas)
}

agregarPersona();