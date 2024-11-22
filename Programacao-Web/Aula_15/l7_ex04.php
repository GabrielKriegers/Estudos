<?php

$clima = "Nublado";

switch ($clima){
  case "Nublado":
    echo "Pode ser que a chuva chegue! Melhor se preparar.";
    break;
  case "Ensolarado":
    echo "Aproveite o dia e não se esqueça do protetor solar!";
    break;
  case "Chuvoso":
    echo "Leve um guarda-chuva!";
    break;
  case "Nevando":
    echo "Coloque um casaco bem quentinho e aproveite a neve!";
    break;
  case "Tempestade":
    echo "Fique em um lugar seguro e evite sair durante a tempestade!";
    break;
  default: 
    echo "Não conheço esse clima.";
    break;
}

?>