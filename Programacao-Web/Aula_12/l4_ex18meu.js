function nExtenso(n){
    const especiais = ["","um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
    const dezenas = ["", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
    const centenas = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];

    var porextenso = '';
    let [reais, centavos] = n.split('.');
    reais = reais.split("");
    centavos = centavos.split("");

    var numeroe = parseInt(reais[reais.length-2] + reais[reais.length-1]);
    
    if (numeroe < 20){
        var ud = especiais[numeroe];
        
    }else{
        let ultimo = especiais[reais[reais.length-1]];
        let penultimo = dezenas[reais[reais.length - 2]- 1];

        if (ultimo == ''){
            var ud = penultimo+ ' reais';

        }else{
            var ud = penultimo +' e '+ ultimo + ' reais';
        }
    }
    porextenso += ud;

    var numeroec = parseInt(centavos[0] + centavos[1]);

    if (numeroec < 20){
        var udc = especiais[numeroec];
        
    }else{
        let ultimoc = especiais[centavos[1]];
        let penultimoc = dezenas[centavos[0]-1];
        var udc = ' e ' + penultimoc +' e '+ ultimoc + ' centavos';
    }
    porextenso += udc;
    console.log(porextenso, '1')










    var natual = 0;
    if (reais.length > 2){
        
        for (var i = 3; i < reais.length; i++) {
            console.log(i);
            if (i==3){
                console.log('tem centena')
                natual = centenas[reais[i-1]- 1];
                porextenso =  natual +' e '+ porextenso;
                console.log(porextenso, '2');
            }    
            if (reais.length>=5){
                var numeroemil = parseInt(reais[0] + reais[1]);

                if (numeroemil < 20){
                    var udmil = especiais[numeroemil];
                    
                }else{
                    let ultimoc = especiais[reais[1]];
                    let penultimoc = dezenas[reais[0]-1];
                    var udc = ' e ' + penultimoc +' e '+ ultimoc + ' reais';
                }
                porextenso += udc;
            }
        }
    }














    console.log(porextenso, '123')
}

nExtenso('3345.45')