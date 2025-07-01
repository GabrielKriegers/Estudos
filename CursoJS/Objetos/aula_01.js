const pessoa = { 
    nome: 'Gabriel', 
    sobrenome: 'Krieger',
    getAnoNascimento(){
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    }
}
pessoa.idade = 18;
const chave = 'nome';

console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log(pessoa[chave]);
console.log(pessoa.getAnoNascimento());

delete pessoa.idade;

console.log(pessoa);



const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.falarNome = function() {return `${this.nome} está falando seu nome.`};

console.log(pessoa1.nome);
console.log(pessoa1.falarNome());

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Gabriel', 'Krieger');
p1.nome = 'Jorge';
delete p1.nome;
p1.fala = function(){console.log('Oi')};
p1.fala();

console.log(p1);
