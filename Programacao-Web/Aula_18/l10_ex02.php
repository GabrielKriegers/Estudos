<?php

if(isset($_GET['num1']) && isset($_GET['num2'])){
    $soma =  $_GET['num1'] + $_GET['num2'];
    print "O valor da soma é $soma";
}


?>