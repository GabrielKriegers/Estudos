var nota = parseInt(prompt("DIgite a sua nota: "));

switch (nota) {
    case 10:
    case 9:
        console.log("Classificação: A");
        break;
    case 8:
    case 7:
        console.log("Classificação: B");
        break;
    case 6:
    case 5:
        console.log("Classificação: C");
        break;
    case 4:
    case 3:
        console.log("Classificação: D");
        break;
    case 2:
    case 1:
    case 0:
        console.log("Classificação: E");
        break;
    default:
        console.log("Nota inválida.");
}