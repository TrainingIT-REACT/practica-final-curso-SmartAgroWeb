import React from 'react';

class sidebar extends React.Component {
    render() {
        return (
        <aside className="contenedor-proyectos">
            <div className="panel crear-proyecto">
                <a href="#" className="boton">Nuevo Proyecto
                    <i className="fas fa-plus"></i>
                </a>
            </div>

            <div className="panel lista-proyectos">
                <h2>Proyectos</h2>
                <ul id="Proyectos">

                    <li>
                        <a href="index.php?id_proyecto=<?php echo $proyecto['id'] ?>" id="<?php echo $proyecto['id'] ?>"></a>
                    </li>
                </ul>
            </div>
        </aside>
        );
    }
}
        
export default sidebar;
