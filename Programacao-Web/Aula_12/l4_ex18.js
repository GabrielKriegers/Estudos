function valorPorExtenso(valor) {
    const unidades = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
    const dezenas = ["", "dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
    const especiais = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
    const centenas = ["", "cem", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];

    function numeroPorExtenso(n) {
        if (n < 10) {
            return unidades[n];
        }

        if (n < 20) {
            return especiais[n - 10];
        }

        if (n < 100) {
            return dezenas[Math.floor(n / 10)] + (n % 10 !== 0 ? " e " + unidades[n % 10] : "");
        }

        if (n < 1000) {
            return centenas[Math.floor(n / 100)] + (n % 100 !== 0 ? " e " + numeroPorExtenso(n % 100) : "");
        }
        
        return "";
    }

    const partes = valor.toFixed(2).split('.');
    const inteiro = parseInt(partes[0], 10);
    const decimal = parseInt(partes[1], 10);

    let resultado = `${numeroPorExtenso(inteiro)} ${inteiro === 1 ? "real" : "reais"}`;
    if (decimal > 0) {
        resultado += ` e ${numeroPorExtenso(decimal)} ${decimal === 1 ? "centavo" : "centavos"}`;
    }

    return resultado;
}

const result1 = valorPorExtenso(1.74);
const result2 = valorPorExtenso(3251.90);

console.log(result1);
console.log(result2);
