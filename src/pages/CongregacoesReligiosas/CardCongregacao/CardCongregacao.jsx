import React, { Component } from "react";
import './estiloCardCongregacao.css'
class CardCongregacao extends Component {
  constructor(props){
    super(props);
    this.congregacao = {};

  }

  constroiCard(congregacao){
    //Construcação dos titulos
    let titulos = [];
    congregacao.titulos.map((titulo)=>{
      titulos.push(
        <div className="negrito" style={{ color: "#8b0000" }}>
          {titulo}
        </div>
      );
    });

    //Construção dos nomes 
    let nomes = [];
    congregacao.nomes.map((nome)=>{
      nomes.push(
        <div>
          {nome}
        </div>
      );
    });

    return (
      <div className="conteudoCardCongregacao">
        {titulos}
        {nomes}
        <div>Cidade: {congregacao.cidade}</div>
        <div>Endereço: {congregacao.local}</div>
        <div>CEP: {congregacao.cep}</div>
        <div>{(congregacao.caixaPostal && ("Caixa postal: "+congregacao.caixaPostal))}</div>
        <div className="negrito">Telefone(s): {congregacao.telefone}</div>
        <div className="negrito">{(congregacao.email)&&("E-mail: "+congregacao.email)}</div>
        {/*Caso não haja caixa postal registrada (null) essa div não terá conteudo*/}
      </div>
    );
  }

  render() {
    return (
      <div className="conteinerCardCongregacao">
        {this.constroiCard(this.props.congregacao)}
      </div>
    );
  }
}

export default CardCongregacao;
