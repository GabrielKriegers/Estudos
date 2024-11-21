<?php

$temperatura  = 14;

if ($temperatura < 10) {
  echo "Está muito frio! Use roupas quentes";
}elseif($temperatura <= 20){
  echo "Frio. Vista-se bem";
}elseif($temperatura <= 25){
  echo "Temperatura agradável.";
}elseif($temperatura <= 30){
  echo "Está ficando quente!";
}else{
  echo "Está muito quente! Fique hidratado.";
}

?>