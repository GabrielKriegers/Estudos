var i = 0;
var n = parseInt(prompt("Digite um número: "));

if ((n % 2) == 0) {
    if (n > 0) {
        for (i; i!= (n + 2); i += 2) {
            console.log(i);
        }
    }else {
        for (i; i!= (n - 2); i -= 2) {
            console.log(i);
        }
    }
}else {
    if (n > 0) {
        for (i; i!= (n++); i += 2) {
            console.log(i);
        }
    }else {
        for (i; i!= (n--); i -= 2) {
            console.log(i);
        }
    }
}
