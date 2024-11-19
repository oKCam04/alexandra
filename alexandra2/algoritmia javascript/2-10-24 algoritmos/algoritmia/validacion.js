let num1= 3;
let num2=4;
let suma= 0;

if (num1>=0){
    if (num2>=0){
        suma=num1+num2;
        console.log("suma: "+suma)
    }
}

//resta 
if (num1>num2){
    let resta=num1-num2;
    console.log("su resta :"+resta)
}

//multiplicación
if (num1>0){
    if (num2>0){
        let mult = num1*num2;
        console.log("multiplicación: "+mult)
    }

}


if (num1===0){
    if (num2===0){
        console.log("el resultado es 0")
    }
}

if (num1!=0){
    if (num2!=0){
        let mult =num1*num2;
        console.log(`el resultado es ${mult}`)
        console.log("el resultado es"+mult )
    }
}