// IIFE immediately invoked function expression.
// Protege o código do escopo global, se executa automaticamente. 

(function() { // Cria a função anônima. Precisa estar dentro de parênteses.
    function fala(nome){
        return 'Olá ' + nome;
    }
    console.log(fala('Gabriel'));
})(); // Executa ela. Fora dos parênteses.