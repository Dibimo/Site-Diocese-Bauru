import React, { Component } from "react";

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
      <div className="container" style={{ border: "1px solid tomato", margin: "2px" }}>
        <div>{this.props.paroquia.nome}</div>
        <div>{this.constroiContato(this.props.paroquia.contato)}</div>
      </div>
    );
  }
}

export default CardContato;
