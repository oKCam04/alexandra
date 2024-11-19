function pasarLista(){
    alummnos=[
        {nombres:"silvio ramirez", alias:"estudioso"},//0
        {nombre:"Fabio Ramirez", alias:"inteligentoso"}//1
    ]
    alummnos.forEach((alumno)=>{
        console.log(alumno.nombre);
        console.log(alumno)
    })
}

pasarLista();