var simbolos = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "\"", "|", ",", ".", "<", ">", "/", "?"];
var n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function criarApelido(nome){
    var a = Math.floor(Math.random()*simbolos.length);
    var p = Math.floor(Math.random()*n.length);   

    console.log(nome+'_'+simbolos[a] + n[p]);
}

criarApelido('André');