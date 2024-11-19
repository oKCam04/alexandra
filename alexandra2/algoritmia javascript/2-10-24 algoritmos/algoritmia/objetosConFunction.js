let mascota = {
    nombre:"Lilian",
    raza:"Pug",
    propietario:"contanza",
    informacion: function(){
        //this es la misma ubicación de objeto
        console.log("Mi mascota es "+ this.nombre+" la raza es: "+this.raza);
    },   
}

console.log(mascota);
console.log(mascota.informacion());