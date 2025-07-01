<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "site_ecommerce"; 


$conn = new mysqli($servername, $username, $password);


if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}


$sql = "CREATE DATABASE IF NOT EXISTS $dbname";

$conn->query($sql);

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

$conn->query($sql);

?>
