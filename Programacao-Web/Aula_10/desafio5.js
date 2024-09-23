var letrasma = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var letrasmi = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var simb = ["@", "#", "$", "%"];
var c = 0;
var e = 0;
var i = 0;
var senha = "";
min = Math.ceil(0);
max = Math.floor(4);
while (c < 8) {
  e = Math.floor(Math.random() * (max - min) + min);
  if (e == 3) {
    const randomIndex = Math.floor(Math.random() * letrasma.length);
    const randomElement = letrasma[randomIndex];
    senha = senha + randomElement;
  } else if (e == 2) {
    const randomIndex = Math.floor(Math.random() * letrasmi.length);
    const randomElement = letrasmi[randomIndex];
    senha = senha + randomElement;
  } else if (e == 1) {
    const randomIndex = Math.floor(Math.random() * num.length);
    const randomElement = num[randomIndex];
    senha = senha + randomElement;
  } else {
    const randomIndex = Math.floor(Math.random() * simb.length);
    const randomElement = simb[randomIndex];
    senha = senha + randomElement;
  }
  c++
}
document.write(senha);

