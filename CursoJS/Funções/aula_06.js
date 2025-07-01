// Factory function (Função fábrica) != Constructor function (Função construtora).
// Essa é uma Factory function.
function Pessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,

        // Getter 
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');   
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando nada'){
            return `${this.nome} está falando sobre ${assunto}.`;
        },

        altura, 
        peso,
        // Getter (deixou de ser um método e se tornou um atributo).
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

p1 = Pessoa('Gabriel', 'Krieger', 1.77, 65);
console.log(p1.fala('sobre programação em JavaScript'));
console.log(p1.imc);
p1.nomeCompleto = 'Gabriel Krieger de Sousa';
console.log(p1.nomeCompleto);