import React, { Component } from "react";
import './estilo.css';

class Titulo extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
  }

  render() {
    return (
      <div className="tintura conteinerTituloComponente">
        <img src="/brasao.png" alt="Brasão da Diocese" className="brasao" />
        <p className="tituloComponente">{this.props.titulo}</p>
      </div>
    );
  }
}

export default Titulo;
