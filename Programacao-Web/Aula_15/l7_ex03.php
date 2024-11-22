<?php

$genero = 2;

switch ($genero){
  case 1:
    echo "Você escolheu Rock. Tocando Bohemian Rhapsody.";
    break;
  case 2:
    echo "Você escolheu Pop. Tocando Blinding Lights.";
    break; 
  case 3:
    echo "Você escolheu Sertanejo. Tocando Ai Se Eu Te Pego.";
    break;
  case 4:
    echo "Você escolheu Eletrônica. Tocando Wake Me Up.";
    break;
  default:
    echo "Estilo inválido.";
    break;
}

?>