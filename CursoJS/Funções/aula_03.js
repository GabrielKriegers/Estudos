/*
return 
Retorna um valor 
Termina a função 
*/


function criaMultiplicador(multiplicador){ // retorna uma função já com seu multiplicador.
    return function (n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
console.log(duplica(8)); //16