import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import Titulo from "./../../components/Titulo/Titulo";
import bispos from "./../../data/bispos.json";
import padresDiaconos from "./../../data/padresDiaconos.json";
import Container from "@material-ui/core/Container";

import "./estilo.css";
class CongregacoesReligiosas extends Component {

  constructor(props){
    super(props);
    this.state = {
      contador: 0,
      bispoAtual: {},
    }
    this.avancar = this.avancar.bind(this);
    this.voltar = this.voltar.bind(this);
  }
  //Bispos
  avancar(){
    let itemAtual = (this.state.contador + 1) % 6;
    this.setState({contador: itemAtual,});
  }

  voltar(){
    let itemAtual;

    if ((this.state.contador) == 0) {
      itemAtual = 5;
    }else{
      itemAtual = (this.state.contador - 1);
    }
    this.setState({ contador: itemAtual });
  }
  controiTexto(paragrafos){
    let texto = [];
    paragrafos.map((paragrafo)=>{
      texto.push(
        <p>{paragrafo}</p>
      );
    });
    return texto;
  }

  //Cards
  constroiCardPadres(){
    let cards = [];
    padresDiaconos.padresDioceseBauru.map((padre)=>{
        cards.push(
          <p className="nomesPadresBauru">{padre}</p>
        );
    });
    return cards;
  }

  constroiCardDiaconosPermanentes(){
    let cards = [];
    padresDiaconos.diaconosPermanentes.map((diacono)=>{
        cards.push(
          <p className="nomesDiaconosPermanentes">{diacono}</p>
        );
    });
    return cards;
  }

  constroiPadresResidindoFora(){
    let cards = [];
    padresDiaconos.padresResidindoFora.map((padre)=>{
      cards.push(
        <div className="padreResidindoFora">
          <img src={"/imagens/Clero/" + padre.foto} />
          <p>{padre.nome}</p>
          <p>{padre.local}</p>
        </div>
      );
    });
    return cards;
  }

  constroiDiaconos(){

  }
  
  render() {
    return (
      <Container
        style={{ backgroundColor: "#F3EEE8" }}
        border="1px"
        border-radius="5px"
        sm="maxWidth"
      >
        <BarraNavegacao></BarraNavegacao>
        <Titulo titulo="CLERO"></Titulo>
        <>
          <button onClick={this.voltar}>&lt;</button>
          <button onClick={this.avancar}>&gt;</button>
        </>
        <div className="conteinerBispos">
          <div>{bispos[this.state.contador].nome}</div>
          <div className="bispoFotoTexto">
            <img
              src={"/imagens/Clero/" + bispos[this.state.contador].nomeFoto}
            ></img>
          </div>
          <div>{this.controiTexto(bispos[this.state.contador].texto)}</div>
        </div>

        <p className="tituloClero">Padres da Diocese de Bauru</p>
        <div className="conteinerPadresBauru">{this.constroiCardPadres()}</div>

        <hr />

        <p className="tituloClero">Padres Residindo Fora da Diocese</p>
        <div className="conteinerPadresResidindoFora">
          {this.constroiPadresResidindoFora()}
        </div>

        <hr />

        <p className="tituloClero">Diaconos Permanentes</p>
        <div className="conteinerDiaconosPermanentes">
          {this.constroiCardDiaconosPermanentes()}
        </div>

        <Rodape></Rodape>
      </Container>
    );
  }
}

export default CongregacoesReligiosas;
