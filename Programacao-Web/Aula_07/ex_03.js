var n1 = prompt("Digite a sua idade: ");

if (n1 > 0 && n1 < 13) {
    document.write("Criança!");
}else if (n1 >= 13 && n1 < 18) {
    document.write("Adolescente!");
}else if (n1 >= 18 && n1 < 60) {
    document.write("Adulto!");
}else if (n1 >= 60 && n1 < 150) {
    document.write("Idoso!");
}else if (n1 >= 150) {
    document.write("Se pá q tá morto em viado!")
}else {
    document.write("Você ainda não nasceu!")
}