let persona = {
    nombre:"Lucas",
    apellido:"Sanchez",
    edad:"25",
    telefono:"13333",
    direccion:"faafafa",
    estudios:["primaria","secundaria","pregrado","postgrado","doctorado"]
}

console.log(persona.apellido);//sanchez
console.log(persona.estudios[1]);

let autos={}

autos.marcas=["ford","audi", "Mazda","Koeniseg","Ferrari"];

console.log(autos.marcas);
console.log(autos.marcas[3]);

delete autos.marcas;

autos.marcas=["ford","audi","mazda","Koeniseg","Ferrari","toyota","chevrolet"];
autos.marcas.length;
console.log(autos.marcas.length)

for (let i=0; i<autos.marcas.length;i++){
    console.log(autos.marcas[i]);
}

autos.marca[2]="jeep";
console.log(autos);