import React, { Component } from "react";


class CardParoquia extends Component {
  constructor(props) {
    super(props);
    this.caminhoImagem = "";
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

  constroiInformacoesAdicionais(info){
    let divs = [];
    //montando as informações fixas
    divs.push(
      <div>Padroeiro: {info.padroeiro}</div>,
      <div>Região Pastoral: {info.regiaoPastoral}</div>,
      <div>Criada em: {info.criacao}</div>,
      <div>Data da Festa: {info.festa}</div>
    );
    //removendo informações fixas do objeto
    delete info.padroeiro;
    delete info.regiaoPastoral;
    delete info.criacao;
    delete info.festa;

    //percorrendo as demais informações
    let imagens = [
      /paroco/,
      /administradorParoquial/, 
      /diacono/, 
      /vigario/, 
    ];
    let informacoesAdicionais = Object.keys(info);
    informacoesAdicionais.map((adicional, key)=>{
      let tagImagem = null;
      if(imagens.some(img => img.test(adicional))){
        tagImagem = (
          <img
            src={this.props.caminhoImagem + adicional + ".webp"}
            alt={info[adicional]}
          />
        );
      }
      divs.push(
        <div key={key}>
          {tagImagem}
          <div>{info[adicional]}</div>
        </div>
      );
    });
    return divs;
  }


  render() {

    return (
      <div className="container" style={{ border: "1px solid", margin: "2px" }}>
        <h5>{this.props.paroquia.nome}</h5>
        <img src={this.props.caminhoImagem+ "paroquia.webp"} />

        <div>Horarios das Missas Matriz:</div>
        {this.constroiHorariosMissas(this.props.paroquia.horariosDeMissa)}
        <hr />
        {this.constroiCapelas(this.props.paroquia.capelas)}

        <h6>Informações Adicionais</h6>
        {this.constroiInformacoesAdicionais(this.props.paroquia.informacoesAdicionais)}
      </div>
    );
  }
}

export default CardParoquia;
