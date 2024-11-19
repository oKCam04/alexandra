let arreglo=["laura", "isabela", "camila", "sara"]
let convertidor=[]
function mayuscula(){
    for (let i=0; i<arreglo.length;i++){
        convertidor[i]=arreglo[i].toUpperCase();
    }
    console.log(convertidor)
}
mayuscula();