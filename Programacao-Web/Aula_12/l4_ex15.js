function verdadeOuMentira(f){
    min = Math.ceil(0);
    max = Math.floor(2);
    var a = Math.floor(Math.random() * (max - min) + min);
    if (a == 0){
        return (f + ' É Verdade');
    }else{
        return (f + ' É Mentira');
    }
}

console.log(verdadeOuMentira('Isso'));