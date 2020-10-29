import React from 'react';

class barra extends React.Component {
    render() {
        return (
            <div className="barra">
                <h1>UpTask - Administración de Proyectos</h1>
                <a href="login.php?cerrar_sesion=true">Cerrar Sesión</a>
            </div>
        );
    }
}

export default barra;
