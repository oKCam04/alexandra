//login, usuario contraseña y dom 

document.querySelector('okay');

okay.addEventListener('click', ()=>{
    let user=document.querySelector('#usuario').value;
    let contra=document.querySelector('#contra').value;

    login(user,contra);
});





function login(user,contra){

    usuario(user,contra);
    contrasena(user,contra);
    function usuario(){
        if(user==null){
            console.log("Usuario vacío");
        } else if(user!=null){
            console.log("Usuario guardado");
        }
    }

    function contrasena(){
        if(contra==null){
            console.log("Contraseña vacía");
        }else if(contra!=null){
            console.log("Contraseña guardada");
        }
       
    }
}