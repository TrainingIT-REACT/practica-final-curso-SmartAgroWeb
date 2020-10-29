<?php

function usuario_autenticado()
{
    # code...
    if (!revisar_usuario()) {
        # code...
        header('Location:login.php');
        exit();
    }
}

function revisar_usuario()
{
    # code...
    return isset($_SESSION['nombre']);
}

session_start();
usuario_autenticado();