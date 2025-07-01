<?php
session_start();

if (!isset($_SESSION['user_id'])){
    header('Location: Login.html');
    exit();
}
?>

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Beyblade | Home</title>
        <link rel="shortcut icon" href="imagens/BBB.jpeg">
        <link rel="stylesheet" href="Pagina_01.css">
    </head>
    <body>
        <div class="menu">
            <div class="header_01" id="header">
                <div class="logo">
                    <img  class="logo" src="imagens/aalogo.png" alt="">
                </div>
                <div class="navigation_header" id="navigation_header">
                    <a href="#">Home</a>
                    <a href="#">Contato</a>
                    <a href="#">Outros Hobbies</a>
                    <a href="#">Acessórios</a>
                    <a href="#">Outlet</a>
                </div>
            </div>

            <div class="header_02">
                <div class="funcionalidades">
                    <div class="pesquisa">
                        <div id= "searchbox" class="searchbox">
                            <input type="text" id="pesquisa" class="search-txt" placeholder="Pesquisar">
                            <button id="lupa" class="lupa">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="var(--color-dark1)" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </button>
                        </div>    
                        <div id="sugestoes" class="sugestoesAutocomplete"></div>
                    </div>
                    <div class="btn_icon_shop" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="var(--color-grey1)" class="bi bi-cart4" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                        </svg>
                    </div>
                    
                    <div class="btn_entrar">
                        <a href="Logout.php" class="active">Sair</a>
                    </div>
                </div>
            </div>
         </div>

        <div tabindex="0" onclick="closeSidebar()" class="content" id="content">
            <div id="aviso" class="daviso">
                <h1 class="aviso">Não há itens correspondentes a sua pesquisa!</h1>
            </div>
            <div class="scroll_01" id="linha_01">
                <div class="produto">
                    <div class="foto">
                        <img class="imagem1" src="imagens/beyblade9.jpg" alt="Item 1">
                    </div>
                    <ul>
                        <li class="nome">ForceDragon</li>
                        <li class="preco">Preço: R$723,99</li>
                    </ul>
                    <div class="parcela">
                        <a class = 'juros'>5x sem juros</a>
                    </div>
                </div>
                
                <div class="produto">
                    <div class="foto">
                        <img class="imagem1" src="imagens/beyblade8.jpg" alt="Item 1">
                    </div>                    <ul>
                        <li class="nome">Excesion</li>
                        <li class="preco">Preço: R$167,99</li>
                    </ul>
                    <div class="parcela">
                        <a class = 'juros'>5x sem juros</a>
                    </div>
                </div>

                <div class="produto">
                    <div class="foto">
                        <img class="imagem1" src="imagens/beyblade8.jpeg" alt="Item 1">
                    </div>
                    <ul>
                        <li class="nome">Terteen</li>
                        <li class="preco">Preço: R$872,99</li>
                    </ul>
                    <div class="parcela">
                        <a class = 'juros'>5x sem juros</a>
                    </div>
                </div>

                <div class="produto">
                    <div class="foto">
                        <img class="imagem1" src="imagens/beyblade7.jpg" alt="Item 1">
                    </div>
                    <ul>
                        <li class="nome">Lendario</li>
                        <li class="preco">Preço: R$532,99</li>
                    </ul>
                    <div class="parcela">

                        <a class = 'juros'>5x sem juros</a>
                    </div>
                </div>

                <div class="produto">
                    <div class="foto">
                        <img class="imagem1" src="imagens/beyblade6.jpg" alt="Item 1">
                    </div>
                    <ul>
                        <li class="nome">Proton</li>
                        <li class="preco">Preço: R$542,99</li>
                    </ul>
                    <div class="parcela">
                        <a class = 'juros'>5x sem juros</a>
                    </div>
                </div>
                <div class="produto">
                    <div class="foto">
                        <img class="imagem1" src="imagens/beyblade5.jpg" alt="Item 1">
                    </div>
                    <ul>
                        <li class="nome">Haase</li>
                        <li class="preco">Preço: R$823,99</li>
                    </ul>
                    <div class="parcela">
                        <a class = 'juros'>5x sem juros</a>
                    </div>
                </div>
            </div>

            <div class="scroll_02" id="linha_02">
                <div class="produto">
                    <div class="foto">
                        <img class="imagem1" src="imagens/beyblade4.jpg" alt="Item 1">
                    </div>
                    <ul>
                        <li class="nome">Ioreen</li>
                        <li class="preco">Preço: R$282,99</li>
                    </ul>
                    <div class="parcela">
                        <a class = 'juros'>5x sem juros</a>
                    </div>
                </div>

                <div class="produto">
                    <div class="foto">
                        <img class="imagem1" src="imagens/beyblade3.jpg" alt="Item 1">
                    </div>
                    <ul>
                        <li class="nome">Loooer</li>
                        <li class="preco">Preço: R$534,99</li>
                    </ul>
                    <div class="parcela">
                        <a class = 'juros'>5x sem juros</a>
                    </div>
                </div>

                <div class="produto">
                    <div class="foto">
                        <img class="imagem1" src="imagens/beyblade2.jpg" alt="Item 1">
                    </div>
                    <ul>
                        <li class="nome">Jaaase</li>
                        <li class="preco">Preço: R$131,99</li>
                    </ul>
                    <div class="parcela">
                        <a class = 'juros'>5x sem juros</a>
                    </div>
                </div>

                <div class="produto">
                    <div class="foto">
                        <img class="imagem1" src="imagens/beyblade8.jpg" alt="Item 1">
                    </div>
                    <ul>
                        <li class="nome">Mandragon</li>
                        <li class="preco">Preço: R$101,99</li>
                    </ul>
                    <div class="parcela">
                        <a class = 'juros'>5x sem juros</a>
                    </div>
                </div>

                <div class="produto">
                    <div class="foto">
                        <img class="imagem1" src="imagens/beyblade10.jpg" alt="Item 1">
                    </div>
                    <ul>
                        <li class="nome">Protonz</li>
                        <li class="preco">Preço: R$201,99</li>
                    </ul>
                    <div class="parcela">
                        <a class = 'juros'>5x sem juros</a>
                    </div>
                </div>

                <div class="produto">
                    <div class="foto">
                        <img class="imagem1" src="imagens/D_NQ_NP_917747-MLU71083716045_082023-O.webp" alt="Item 1">
                    </div>
                    <ul>
                        <li class="nome">Scairen</li>
                        <li class="preco">Preço: R$99,99</li>
                    </ul>
                    <div class="parcela">
                        <a class = 'juros'>5x sem juros</a>
                    </div>
                </div>
            </div>
        </div>
    </body>


</html>

<script src="JS/autoComplete.js"></script>