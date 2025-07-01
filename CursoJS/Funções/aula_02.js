/*
A variável arguments (que é do próprio JS) sustenta todos os argumentos enviados. 
Só funciona com funções criadas com a palavra function. 
Não funciona em arrow function.

Caso um parâmetro não receba argumento, ele é preenchido automaticamente com undefined.
*/


function funcao(a = 2, b = 4, c = 1){
    let soma = a + b + c;
    
    console.log(soma);
}

funcao(10, undefined, 2038);


// ...numeros (rest operator) pega tudo que não for operador ou acumulador.
const conta = (operador, acumulador, ...numeros) => {  
    for (let numero of numeros){
        if (operador == '+') acumulador += numero;
        if (operador == '-') acumulador -= numero;
        if (operador == '/') acumulador /= numero;
        if (operador == '*') acumulador *= numero;

    }    
    console.log(acumulador);
}

/* 
* Em arrow function substitui o arguments por rest operator sem mais nenhum parâmetro:
* function exemplo (...args){
    Aqui pode usar todos
}

*/
conta('+', 0, 45, 65, 7, 23);