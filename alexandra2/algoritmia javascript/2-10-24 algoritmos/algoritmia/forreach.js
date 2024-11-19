//arreglos foreach

//funcion flecha con flecha de forreach
let forReach = ()=>{
    let numeros=[1,2,3,4,5,6,7];
    numeros.forEach((num) =>{
        console.log(num);
    })

    
}
forReach();

// otra forma 
let forRReach = ()=>{
    let numeros=[1,2,3,4,5,6,7];
    numeros.forEach(function(num){
        console.log(num)
    })
    
}
forReach();
