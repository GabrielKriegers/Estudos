function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoquePrivado;
        }, 
        set: function(valor){
            if (typeof valor != "number"){
                throw new TypeError('O valor deve ser um número.')
            }
            estoquePrivado = valor;
        } 
    });
}

function criaProduto(nome, preco, estoque){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    }
}


const p2 = criaProduto('Camiseta', 40, 30000);

const p1 = new Produto('Camiseta', 50, 3000);
p1.estoque = 200;
console.log(p1.estoque);

p2.nome = 'Qualquer coisa';
console.log(p2.nome);