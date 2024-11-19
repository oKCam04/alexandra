function multiplicar(a, b, c){
    let resultado=1;
    resultado=a*b*c;
    return resultado

}
console.log(multiplicar(2,3,5))
//tipo flecha
let multiplicar1=(a,b,c)=>{
    let res=1;
    res=a*b*c;
    return "resultado "+res;
}
console.log(multiplicar1(2,5,8));