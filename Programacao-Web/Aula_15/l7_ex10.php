<?php

$peso = 34;
$altura = 1.56;
$imc = $peso/($altura*$altura);

switch ($imc){
  case $imc < 18.5:
    echo "Abaixo do peso.";
    break;
  case $imc >= 18.5 && $imc < 25:
    echo "Peso normal.";
    break;
  case $imc >= 25 && $imc < 30:
    echo "Sobrepeso.";
    break;
  case $imc >= 30:
    echo "Obesidade.";
    break;
}

?>