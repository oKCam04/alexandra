
let nivelRiesgo=(edad, booleable)=>{
    let riesgo=(edad>60 || booleable==true)?"alto riesgo":(edad>=40 & edad<=60 & booleable==true)?"riesgo moderado":"bajo riesgo";
    return riesgo;
}

export default nivelRiesgo;