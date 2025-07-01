function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(valor){
    this.preco += valor;
}

Produto.prototype.desconto = function(valor){
    this.preco -= valor;
}

function Camisa(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}


Camisa.prototype = Object.create(Produto.prototype);
Camisa.prototype.constructor = Camisa;

Camisa.prototype.aumento = function(percentual){
    this.preco = this.preco * (1 + (percentual / 100));
}

function Caneca(preco, nome, material, estoque){
    Produto.call(this, preco, nome);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;



const produto = new Produto('Manga curta', 50)
const camisa = new Camisa('Manga curta', 50, 'Preta');
const caneca = new Caneca('Caneca G', 15, 'Porcelana', 20);

camisa.aumento(50);
produto.aumento(50);
caneca.aumento(5);
console.log(camisa);
console.log(produto);
console.log(caneca);