function dataExtenso(){
    var data = prompt("Digite a data:");
    const [dia, mes, ano] = (data.split("/"));
    di = parseInt(dia);
    me = parseInt(mes);
    an = parseInt(ano);
    const meses = ["Janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const especiais = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"]
    const dezena = ["vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
    if (di < 20){
        var d = especiais[di - 1];
    }else{
        console.log(di / 10)
        var d = String(dezena[parseInt(di / 10)-2]);
        d += ' e ' +especiais[(di % 10)-1];
    }
    var m = meses[me - 1];
    
    if (an < 2000 || an < 2100) {
        var an = an % 1000;
        var a = dezena[parseInt(an / 10) - 2];
        an = an % 10;
        a += ' e ' + String(especiais[an -1]);
    }else{
        console.log("Ano inválido");    
    }
    console.log(d, "de", m, "de dois mil e", a)
}

dataExtenso();
