import React, { Component } from "react";
import './estilo.css';
class CardContato extends Component {
  constructor(props) {
    super(props);
    this.paroquia = {};
  }

  constroiContato(infoContato){
    return (
      <div>
        <div>Rua: {infoContato.rua}</div>
        <div>E-mail: {infoContato.email}</div>
        <div>Telefone(s): {infoContato.telefone}</div>
      </div>
    );
  }


  render() {
    return (
      <div className="containerInformacoesParoquias">
        <h6>{this.props.paroquia.nome}</h6>
        <div>{this.constroiContato(this.props.paroquia.contato)}</div>
      </div>
    );
  }
}

export default CardContato;
