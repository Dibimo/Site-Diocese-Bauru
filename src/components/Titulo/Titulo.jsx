import React, { Component } from "react";

class Titulo extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
  }

  render() {
    return (
      <div className="tintura" align="center">
        <img src="/brasao.png" alt="Brasão da Diocese" />
        <p>{this.props.titulo}</p>
        
      </div>
    );
  }
}

export default Titulo;
