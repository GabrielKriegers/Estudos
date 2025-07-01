var lista = ['João', 'Maria', 'Jorge', 'Dinossauro', 'Mateus'];
function sortear(l) {
    var s = Math.floor(Math.random()*l.length);
    return l[s];
}

console.log(sortear(lista));    