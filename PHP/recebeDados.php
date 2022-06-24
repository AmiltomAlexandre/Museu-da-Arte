<?php
    echo 'Script para receber e armazenar as obras';
    
    $nome_artista = $_GET['nome_artista'];
    $nome_obra = $_GET['nome_obra'];
    $descricao = $_GET['descricao'];
    $url_umagem = $_GET['url_umagem'];

    //conexão com o banco de dados
    $hostname = 'localhost:3306';//3306
    $user = 'root';
    $password = ''; //'ifsp'
    $database = 'obra_arte';

    $conn = mysqli_connect($hostname, $user, $password, $database);
    if($conn){
        echo 'Conexão com o banco efetuada com sucesso!!!';
        //Gravar os dados no banco de dados
        $query = "insert into cadastro(nome_artista,nome_obra, descricao, url_umagem,) 
        values ('".$nome_artista."','".$nome_obra."','".$descricao."','".$url_umagem."');";

        echo '<br />'.$query;
        $res = mysqli_query($conn, $query);

        if($res){
            echo '<h2>Obra incluida com sucesso!!!</h2>';   
            header("Location:".$_SERVER['HTTP_REFERER']);
            
            //var_dump($_SERVER['HTTP_REFERER']);
            //header("Location:http://127.0.0.1:5500/index.html");
        }
            
        else{
            echo '<h2>Obra não incluida.</h2>';
        }
        
       
    }else{
        echo 'Conexão com o banco de dados não efetuada!!! <br />';
        echo mysqli_connect_error();
    }