let empleados = [
    {
        nombre:"Juan",
        direccion:"123",
        telefono:"000",
        cargo:"Aseador"
    },
    {
        nombre:"Ana",
        direccion:"123",
        telefono:"11000",
        cargo:"Oficinista"
    },
    {
        nombre:"Luis",
        direccion:"00123",
        telefono:"00022",
        cargo:"Jefe"
    }
]

console.log(empleados);

//recorrer arreglo

for (let i=0;i<empleados.length;i++){
    console.log(empleados[i].nombre);
}

// empleados[1].cargo="Gerente";

for (let i=0;i<empleados.length;i++){
    if (empleados[i].nombre=="Ana"){
        empleados[i].cargo="gerente"
    }
}

console.log(empleados[1]);

delete empleados[2]; // no se recomienda

console.log(empleados)

for (let i=0;i<empleados.length;i++){
    if (empleados[i].nombre=="Luis"){
        empleados[i].splice(i,1); //eliminar posiciones arreglo
    }
}

