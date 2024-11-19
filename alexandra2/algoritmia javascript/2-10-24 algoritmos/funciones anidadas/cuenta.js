


function cuenta(saldo, depositar, retirar){

saldo=deposito(saldo, depositar);
saldo=retiro(retirar, saldo);
mostrarSaldo(saldo);

function deposito(saldo, depositar){
    saldo=saldo+depositar;

    return saldo;
}

function retiro(retirar, saldo){
    saldo=saldo-retirar;
    return saldo;
}

function mostrarSaldo(saldo){
    return saldo;
}

console.log("El saldo actual es: " + saldo);

}

cuenta(500, 20, 10);