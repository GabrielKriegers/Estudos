<?php

$mes = 4;
$dia = 15;

if($mes == 3 && $dia > 20 || $dia < 20 && $mes == 4){
  echo "Áries é o primeiro signo do zodíaco e traz uma energia de pioneirismo e coragem. Regido por Marte, o deus da guerra, Áries é conhecido por sua paixão, dinamismo e determinação. Os arianos são líderes natos, destemidos e não têm medo de enfrentar novos desafios. Se você é de Áries, está sempre em busca de novas aventuras e tem uma enorme capacidade de se reinventar.";
}elseif($mes == 4 && $dia > 19 || $mes == 5 && $dia < 21){
  echo "Touro é um signo de terra, regido por Vênus, e está associado à estabilidade, sensualidade e praticidade. Taurinos são conhecidos por sua determinação, paciência e amor pelas coisas boas da vida. Apreciadores de conforto e beleza, eles buscam segurança emocional e financeira, sendo pessoas leais e confiáveis. Se você é de Touro, é provavelmente alguém que valoriza as coisas duradouras e tem uma forte conexão com o mundo material.";
}elseif($mes == 5 && $dia > 20 || $mes == 6 && $dia < 21){
  echo "Seu signo é Gêmeos. Sua mente é uma fonte inesgotável de criatividade e ideias. Use sua curiosidade para explorar novos horizontes e se reinvente sempre que sentir necessidade.";
}elseif($mes == 6 && $dia > 20 || $mes == 7 && $dia < 23){
  echo "Seu signo é Câncer. Seu coração é um refúgio de amor e cuidado. Não tenha medo de ser vulnerável, pois a verdadeira força está na capacidade de nutrir e proteger o que é importante para você.";
}elseif($mes == 7 && dia > 22 || $mes == 8 && $dia < 23){
  echo "Seu signo é Leão. Você nasceu para brilhar! Confie na sua luz interior e permita-se ser a liderança que o mundo precisa. Sua generosidade e confiança inspiram os outros.";
}

?>

