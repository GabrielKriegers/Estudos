var forma = parseInt(prompt("Escolha a forma de pagamento:\n 1 - Débito; \n 2 - Crédito; \n 3 - Dinheiro."));

switch (forma) {
    case 1:
        console.log("Débito.");
        break;
    case 2:
        console.log("Crédito.");
        break;
    case 3:
        console.log("Dinheiro.");1
        break;
    default:
        console.log("Número inválido.")
}