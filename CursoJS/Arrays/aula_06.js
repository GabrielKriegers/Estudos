// reduce é usado para transformar o array em um único elemento.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// Exemplo correto
const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador;
}, 0)
console.log(total);

// Não recomendado, melhor usar filter
const pares = numeros.reduce((acumulador, valor) =>{
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador
}, []);
console.log(pares);

// Não recomendado, melhor usar map
const dobro = numeros.reduce((acumulador, valor) =>{
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(dobro);

const pessoas = [
    {nome: 'Maria', idade: 45},
    {nome: 'Marcos', idade: 80},
    {nome: 'Luiz', idade: 18},
    {nome: 'Júnior', idade: 23},
    {nome: 'Luiza', idade: 54},
    {nome: 'Rosângela', idade: 22},
];

const maisVelha = pessoas.reduce((acumulador, valor) =>{
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);