<?php

$nota = 7.5;
switch($nota){
  case 10:
    echo "Excelente.";
    break;
  case $nota >= 8 && $nota <= 9:
    echo "Muito bom";
    break;
  case $nota >= 6 && $nota < 8:
    echo "Bom, mas pode melhorar.";
  case $nota < 6:
    echo "Reprovado.";
    break;
  default:
    echo "Nota inválida.";
    break;
}

?>