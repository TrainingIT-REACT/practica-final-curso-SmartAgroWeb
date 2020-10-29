<?php
    //Obtiene la pagina actual que se ejecuta
    function obtenerPaginaActual() {
        $archivo = basename($_SERVER['PHP_SELF']);
        $pagina = str_replace(".php", "", $archivo);
        return $pagina;
    }

/* Consultas */

    //Obtener todos los proyectos
    function obtenerProyectos()
    {
       include 'conexion.php' ;

       try {
           //code...
           return $conn->query('SELECT id, nombre from proyectos');

       } catch (Exception $e) {
           //throw $th;
           echo "Error!: " + $e->getMessage();
           return false;
       }
    }

     //Obtener todos los proyectos
     function obtenerNombreProyecto($id = null)
     {
        include 'conexion.php' ;
 
        try {
            //code...
        return $conn->query("SELECT nombre from proyectos WHERE id = {$id}");
 
        } catch (Exception $e) {
            //throw $th;
            echo "Error!: " + $e->getMessage();
            return false;
        }
     }