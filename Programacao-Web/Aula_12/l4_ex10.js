while(true){
    var hora = prompt("Informe a hora:");
    hora = hora.split(":");
    if (hora[0] > 12) {
        var h =  parseInt(hora[0]) - 12;
    }
    h_m = h + ':' + hora[1];
    console.log(h_m)
    break;
}