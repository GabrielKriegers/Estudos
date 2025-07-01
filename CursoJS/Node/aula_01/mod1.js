const nome = 'Gabriel';
const sobrenome = 'Krieger';

const fala = () => nome + ' ' + sobrenome;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.fala = fala;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.fala = fala;
this.qualquerCoisa = 'Ao q eu quiser exportar.';

// console.log(exports);