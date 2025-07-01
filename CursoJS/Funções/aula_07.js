// Função construtoras -> objetos
// Função fábrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome){
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function(){

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    

    this.fala = () => {
        console.log(this.nome, 'falou alguma coisa.')
    }
}

const p1 = new Pessoa('João', 'Marcos');
p1.fala();