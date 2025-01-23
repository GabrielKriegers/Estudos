<?php
session_start();

if (!isset($_SESSION['user_id'])){
    header('Location Login.html');
    exit();
}else{
    header('Location: Pagina_01.html');
}
?>