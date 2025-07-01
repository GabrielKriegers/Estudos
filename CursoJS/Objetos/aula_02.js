//defineProperty - defineProperties

function Produto(nome, preco, estoque){

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar o valor 
        configurable: false // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar o valor 
            configurable: false // configurável
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true, // pode alterar o valor 
            configurable: false // configurável
        }
    })
}

const p1 = new Produto('Camiseta', 30, 200);

console.log(p1);
console.log(Object.keys(p1));
for(let chave in p1){
    console.log(chave);
}