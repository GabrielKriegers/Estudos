const pessoas = [
    { id: 3, nome: 'Maria'},
    { id: 2, nome: 'Helena'},
    { id: 1, nome: 'Carlos'}
];

// const novasPessoas = {};

// for (pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa};
// }



const novasPessoas = new Map();

for (pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa});
}

for (const pessoas of novasPessoas.keys()){
    console.log(pessoas);
}

novasPessoas.delete(3);
console.log(novasPessoas);