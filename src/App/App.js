import React, { Component } from 'react';

// Css
import './css/App.css';
import barra from './templates/barra';
import sidebar from './templates/sidebar';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
      <div className="App">
        
        <h1>Reactify - Tu App de musica</h1>
        <barra />
        <sidebar />
        <p>
          Esta plantilla contiene todo lo necesario para comenzar a
          desarrollar la práctica final. Antes de comenzar a desarrollar,
          lee la documentación de la práctica y el fichero README.md de
          este repositorio.
        </p>
        <h2>Servidor de desarrollo</h2>
        <p>
          El proyecto está preconfigurado con un servidor de desarrollo basado
          en json-server:
        </p>
          { this.state.loading ?
            <p>Cargando...</p>
            : <ul>
              {this.state.albums.map(album => <li key={album.id}>{album.name}</li>)}
            </ul>
          }
        <h2>¿Dudas?</h2>
        <p>
          No olvides pasarte por el foro si tienes alguna duda sobre la práctica final
          o la plantilla :).
        </p>
      </div>
    );
  }
}

export default App;
