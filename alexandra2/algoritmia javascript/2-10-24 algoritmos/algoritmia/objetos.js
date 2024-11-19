let deportes = {
    nombre: "futbol",
    tipo: "conBalon"
}

let persona={
    nombre:"Sara socas",
    apellido:"Xocas ",
    edad:20,
    direccion:"villa del viento",
    telefono: 3108146690
}

deportes.nombre="Baloncesto";
delete deportes.tipo;

console.log(deportes.nombre);