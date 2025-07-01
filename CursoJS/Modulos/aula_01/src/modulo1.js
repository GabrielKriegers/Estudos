export const nome = 'Luiz';
export const sobrenome = 'Marcos';
export const idade = 23;

export default function soma(x, y){
    return x + y;
}

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}