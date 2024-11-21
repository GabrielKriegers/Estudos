<?php

$j1 = "Papel";
$j2 = "Tesoura";

if($j1 == "Pedra"){
  if($j2 == "Tesoura"){
    echo "Jogador 1 venceu.";
  }elseif($j2 == "Papel"){
    echo "Jogador 2 venceu.";
  }else{
    echo "Empate.";
  }
}elseif ($j1 == "Papel"){
  if($j2 == "Tesoura"){
    echo "Jogador 2 venceu.";
  }elseif ($j2 == "Pedra") {
    echo "Jogador 1 venceu.";
  }else{
    echo "Empate.";
  }
}elseif($j1 == "Tesoura"){
  if($j2 == "Papel"){
    echo "Jogador 1 venceu.";
  }elseif($j2 == "Pedra"){
    echo "Jogador 2 venceu.";
  }else{
    echo "Empate.";
  }
}


?>


