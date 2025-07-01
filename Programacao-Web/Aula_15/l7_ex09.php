<?php

$i = 35;

switch ($i){
  case $i < 13:
    echo "Criança.";
    break;
  case $i >= 13 && $i <= 18:
    echo "Adolescente.";
    break;
  case $i > 18 && $i <= 65:
    echo "Adulto.";
    break;
  case $i > 65:
    echo "Idoso";
  break;
}

?>