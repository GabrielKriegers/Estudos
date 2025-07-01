const produto = { nome: 'Produto', preco: 1.7};
const caneca = { ...produto,
    cor: 'Preta',
    material: 'Cerâmica'
};

const caneca2 = Object.assign({}, produto, {material: 'Porcelana'});


caneca.nome = 'Caneca';
caneca.preco = 3;

console.log(produto);
console.log(caneca);
console.log(caneca2);


console.log(Object.getOwnPropertyDescriptor(caneca, 'nome'));

for(let [chave, valor] of Object.entries(caneca)){
    console.log(chave, valor);
}
console.log()
for(let valor of Object.entries(caneca)){
    console.log(valor[0], valor[1]);
}