<?php
    $servidor = 'localhost';
    $usuario = 'zerocool';
    $password = '{*126Pincel_*]';
    $db = 'proyecto';

    $conexion = new mysqli($servidor, $usuario, $password, $db);
    $conexion->set_charset('utf8');

    if($conexion-> connect_error){
        die('Conexion Fallida: '. $conexion-> connect_error);
    }

    echo 'Conexion Exitosa...';
?>