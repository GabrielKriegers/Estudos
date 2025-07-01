function Pessoa(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
        // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
// Assim não é criado um método por instância. Otimizando o código.

const pessoa1 = new Pessoa('João', 'Gustavo');
const pessoa2 = new Pessoa('Joana', 'Esteves');

console.log(Pessoa.prototype === pessoa1.__proto__);