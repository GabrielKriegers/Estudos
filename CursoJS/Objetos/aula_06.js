// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
    // __proto__: objA
}

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco * (1 - (percentual / 100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco * (1 + (percentual / 100));
}

const p1 = new Produto('Camisa', 100);
const p2 = {
    nome: 'Copo Americano', 
    preco: 30
}
Object.setPrototypeOf(p2, Produto.prototype);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true, 
        configurable: true, 
        enumerable: true, 
        value: 40
    },
    nome: {
        writable: true, 
        configurable: true, 
        enumerable: true, 
        value: 'Óculos'
    }
});

p1.aumento(100);
p2.desconto(20);
p3.desconto(5)
console.log(p1);
console.log(p2);
console.log(p3);