function embaralhar(s) {
    // s.toUpperCase();
    s = s.split("");

    for (let i = 0; i < s.length; i++) {
        var j = Math.floor(Math.random()*s.length);
        var temp = s[i];
        s[i] = s[j];
        s[j] = temp

    }
    s.join("");
    let x = s.toLowerCase();
    return x;
}


console.log(embaralhar("Vai catar coquinho na praia!"));