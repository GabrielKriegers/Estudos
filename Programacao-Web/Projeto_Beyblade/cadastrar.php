<?php
include "conectar.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = trim($_POST['nome']);
    $nome_user = trim($_POST['nome_user']);
    $email = trim($_POST['email']);
    $senha = trim($_POST['senha']);
    $data_nasc = trim($_POST['data_nasc']);
    $cpf = trim($_POST['cpf']);

    if (!empty($nome) && !empty($nome_user) && !empty($email) && !empty($senha) && !empty($data_nasc) && !empty($cpf)) {

        $senha_hash = password_hash($senha, PASSWORD_DEFAULT);

        $stmt = $conn->prepare("INSERT INTO user (nome, nome_user, email, senha, data_nasc, cpf) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $nome, $nome_user, $email, $senha_hash, $data_nasc, $cpf);

        if ($stmt->execute()) {
            echo "<p>Usuário cadastrado com sucesso!</p>";
        } else {
            echo "<p>Erro ao inserir registro: " . $stmt->error . "</p>";
        }

        $stmt->close();
    } else {
        echo "<p>Erro: Por favor, preencha todos os campos.</p>";
    }
}

$conn->close();
?>
