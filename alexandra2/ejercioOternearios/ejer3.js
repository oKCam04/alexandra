let Votar=(edad)=>{
    let res= (edad>18)?"puedes votar": (edad<18)? "no puedes votar":"tienes 18 años, puedes votar";
    return res;
}
console.log(Votar(15));
console.log(Votar(18));
console.log(Votar(42));
 