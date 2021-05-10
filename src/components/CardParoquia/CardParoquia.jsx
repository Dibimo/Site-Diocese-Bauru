import React, { Component } from "react";


class CardParoquia extends Component {
  constructor(props) {
    super(props);
    this.paroquia = {};
  }
  constroiHorariosMissas(vetor) {
    let horariosDivs = [];
    vetor.map((horario) => {
      horariosDivs.push(<div> &ensp; {horario}</div>);
    });
    return horariosDivs;
  }

  constroiCapelas(vetor) {
    let capelas = [<div>Capelas</div>];
    if(vetor.length == 0){
      capelas.push(<div>Matriz</div>)
      return (capelas);
    }
    let capelasDivs = [];
    vetor.map((capela) => {
      capelasDivs.push(
        <div>
          <div>&ensp;{capela.nome}</div>
          <div>&ensp;{capela.local}</div>
          <div>{this.constroiHorariosMissas(capela.horarios)}</div>
          <hr></hr>
        </div>
      );
    });
    capelas.push(capelasDivs);
    return capelas;
  }

  

  render() {
    return (
      <div className="container" style={{ border: "1px solid", margin: "2px" }}>
        <div>Nome: {this.props.paroquia.nome}</div>

        <div>Horarios das Missas Matriz:</div>
        {this.constroiHorariosMissas(this.props.paroquia.horariosDeMissa)}
        <hr></hr>
        {this.constroiCapelas(this.props.paroquia.capelas)}
      </div>
    );
  }
}

export default CardParoquia;
