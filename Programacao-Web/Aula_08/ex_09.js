var i = 0;
var n = parseInt(prompt("Digite um número: "));

if (n > 0) {
    for (i; i!= (n + 1); i++) {
        console.log(i);
    }
}else {
    for (i; i!= (n - 1); i--) {
        console.log(i);
    }
}