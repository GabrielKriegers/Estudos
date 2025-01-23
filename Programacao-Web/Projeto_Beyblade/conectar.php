<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "meu_banco";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
    die ("Conexão falhou: " . $conn->connect_error);
}

$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($sql) === TRUE) {
    echo "Banco de dados '$dbname' criado ou já existe.\n";
} else {
    echo "Erro ao criar banco de dados: " . $conn->error . "\n";
}

$conn->select_db($dbname);

$sql = "CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nome_user VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_nasc DATE NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE
)";

if ($conn->query($sql) === TRUE) {
    echo "Tabela 'user' criada ou já existe.\n";
} else {
    echo "Erro ao criar tabela 'user': " . $conn->error . "\n";
}


?>