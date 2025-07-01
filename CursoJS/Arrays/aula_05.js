const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobrados = numeros.map(valor => valor * 2);
console.log(dobrados);


const pessoas = [
    {nome: 'Maria', idade: 45},
    {nome: 'Marcos', idade: 80},
    {nome: 'Luiz', idade: 18},
    {nome: 'Júnior', idade: 23},
    {nome: 'Luiza', idade: 54},
    {nome: 'Rosângela', idade: 22},
];


const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);

const comID = pessoas.map((obj, indice) =>{
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
})
console.log(comID);

console.log(pessoas);