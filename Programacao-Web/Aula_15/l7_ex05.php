<?php

$genero = "rock";

switch ($genero){
  case "rock":
    echo "Artista recomendado: Freddie Mercury. ";
    break;
  case "pop":
    echo "Artista recomendado: Ariana Grande. ";
    break;
  case "jazz":
    echo "Artista recomendado: Miles Davis.";
    break;
  case "hip-hop":
    echo "Artista recomendado:  Kendrick Lamar. ";
    break;
  case "sertanejo":
    echo "Artista recomendado: Jorge & Mateus. ";
    break;
  default:
    echo "Gênero inválido.";
}

?>