
let usuario="admin";
let contraseña=1234;

if (usuario=="admin" && contraseña==1234){
    console.log("Acceso concedido");
} else if (usuario!="admin"  && contraseña==1234){
    console.log("Acceso denegado");
} else if (usuario!="admin"){
    console.log("Acceso denegado");
} else if (contraseña!=1234){
    console.log("Acceso denegado");
}