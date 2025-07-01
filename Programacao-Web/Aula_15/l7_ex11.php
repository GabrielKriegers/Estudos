<?php

$hora = 23;

switch ($hora){
  case $hora >= 5 && $hora < 12:
    echo "Manhã.";
    break;
  case $hora >= 12 && $hora < 18:
    echo "Tarde.";
    break;
  case $hora >= 18 && $hora < 21:
    echo "Noite.";
    break;
  case $hora >= 21 && $hora <= 24 || $hora <=0 && $hora < 5:
    echo "Madrugada.";
    break;
}

?>