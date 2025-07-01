var fruta = prompt("Digite o nome de uma fruta que comece com a letra  'A': ");
switch (fruta) {
    case Abacate:
        console.log("Sabor levemente adocicado mas com um grande caroço em seu centro.");
        break;
    case Amora:
        console.log("Fruta roxa muito doce, cuidado para não manchar a roupa.");
        break;
    case Abacaxi:
        console.log("Fruta doce e ácida, sua coroa pode ser replantada.");
        break;
    case Ameixa:
        console.log("Fruta avermelhada, lisa e muito doce, seu caroço é um ótimo passa-tempo.");
        break;
    default:
        console.log("Não conheço essa fruta.");
}