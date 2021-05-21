import React, { Component } from "react";
import Container from "@material-ui/core/Container";
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
        <div style={{color: "#8b0000"}}>
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
        <div>{titulos}</div>
        <div>{nomes}</div>
        <div>Cidade: {congregacao.cidade}</div>
        <div>Endereço: {congregacao.local}</div>
        <div>CEP: {congregacao.cep}</div>
        <div>Telefone(s): {congregacao.telefone}</div>
        <div>{(congregacao.email)&&("E-mail: "+congregacao.email)}</div>
        {/*Caso não haja caixa postal registrada (null) essa div não terá conteudo*/}
        <div>{(congregacao.caixaPostal && ("Caixa postal: "+congregacao.caixaPostal))}</div>
      </div>
    );
  }

  render() {
    return (
      <div style={{ border: "1px solid" }}>
        {this.constroiCard(this.props.congregacao)}
      </div>
    );
  }
}

export default CardCongregacao;
