var animal = ['lagosta boxeadora', 'águia', 'tatu', 'formiga', 'rinoceronte', 'hipopótamo'];
var palavra = ['imortal', 'super', 'doutor', 'todo poderoso', 'incrível', 'invencível'];

function criarSuperHeroi(n){
    var a = Math.floor(Math.random()*animal.length);
    var p = Math.floor(Math.random()*palavra.length);

    console.log(n+ ', O', palavra[p], animal[a]);
}

criarSuperHeroi('André')