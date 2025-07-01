// filter, map, reduce 

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const m10 = [];
for (let numero of numeros){
    if (numero > 10){
        m10.push(numero);
    }
}
const numerosFiltrados = numeros.filter(valor => valor > 10); 
console.log(m10);
console.log(numerosFiltrados);


const pessoas = [
    {nome: 'Maria', idade: 45},
    {nome: 'Marcos', idade: 80},
    {nome: 'Luiz', idade: 18},
    {nome: 'Júnior', idade: 23},
    {nome: 'Luiza', idade: 54},
    {nome: 'Rosângela', idade: 22},
];

const nomesGrandes = pessoas.filter(obj => obj.nome.length >= 5 );
const pessoasCinquentaPlus = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log("\nPessoas que tem nome com mais de 5 letras:");
for(obj of nomesGrandes){
    console.log('Nome:', obj.nome, '/ Idade:', obj.idade);
}

console.log("\nPessoas com mais de 50 anos: ");
for(obj of pessoasCinquentaPlus){
    console.log('Nome:', obj.nome, '/ Idade:', obj.idade);
}

console.log("\nPessoas cujo nome termina com 'A': ");
for(obj of nomeTerminaComA){
    console.log('Nome:', obj.nome, '/ Idade:', obj.idade);
}