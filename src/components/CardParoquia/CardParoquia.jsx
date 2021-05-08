import React, { Component } from "react";


class CardParoquia extends Component {
  constructor(props) {
    super(props);
    this.paroquia = {};
  }
  constroiHorariosMissas(horariosVetor) {
    let horariosDivs = [];
    horariosVetor.map((horario) => {
      horariosDivs.push(<div> &ensp; {horario}</div>);
    });
    return horariosDivs;
  }

  constroiCapelas(capelasVetor) {
    let capelasDivs = [];
    capelasVetor.map((capela) => {
      capelasDivs.push(
        <div>
          <div>&ensp;{capela.nome}</div>
          <div>&ensp;{capela.local}</div>
          <div>{this.constroiHorariosMissas(capela.horarios)}</div>
          <hr></hr>
        </div>
      );
    });
    return capelasDivs;
  }

  

  render() {
    return (
      <div className="container" style={{ border: "1px solid", margin: "2px" }}>
        <div>Nome: {this.props.paroquia.nome}</div>

        <div>Horarios das Missas Matriz:</div>
        {this.constroiHorariosMissas(this.props.paroquia.horariosDeMissa)}
        <hr></hr>
        <div>Capelas</div>
        {this.constroiCapelas(this.props.paroquia.capelas)}
      </div>
    );
  }
}

export default CardParoquia;
