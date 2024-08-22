var classe = prompt("Insira uma classificação indicativa de filme: ");

switch (classe) {
    case 'L':
        console.log("Filmes infantis.");
        break;
    case '10':
        console.log("Pode conter conteúdos angustiantes, de medo ou tensão, arma com violência, ato criminoso sem violência, \n linguagem depreciativa e ossada ou esqueleto com resquício de ato de violência.");
        break;
    case '12':
        console.log("Pode conter agressão verbal, assédio sexual, ato violento e ato violento contra animal, bullying, descrição de violência,\n exposição ao perigo, exposição a cadáver, exposição de pessoa em situação constrangedora ou degradante, lesão corporal, \n morte derivada de ato heroico, morte natural ou acidental com dor");
        break; 
    case '14':
        console.log("É possível ver cenas de aborto, estigma ou preconceito, eutanásia, exploração sexual, morte intencional e pena de morte.\n É permitida nudez, prostituição, relação sexual e vulgaridade. Quanto a drogas, as produções podem mostrar o consumo insinuado ou\n descrição do consumo ou tráfico de droga ilícita.");
        break;
    case '16':
        console.log("Pode apresentar atos de pedofilia, crime de ódio, estupro ou coação sexual, mutilação, suicídio, tortura e violência\n gratuita ou banalização da violência. Conteúdos com consumo, indução e produção ou tráfico de droga ilícita, também são permitidos.");
        break;
    case '18':
        console.log("Conteúdo exclusivamente destinado a adultos, sendo possível veicular apologia à violência e crueldade, sexo explícito,\n situação sexual complexa ou de forte impacto, e apologia ao uso de droga ilícita.");
        break;
    default:
        console.log("Classificação inválida.")
}