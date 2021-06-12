import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import Titulo from "./../../components/Titulo/Titulo";
import bispos from "./../../data/bispos.json";
import padresDiaconos from "./../../data/padresDiaconos.json";
import Container from "@material-ui/core/Container";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Collapse } from 'reactstrap';

import "./estilo.css";
class CongregacoesReligiosas extends Component {

  constructor(props){
    super(props);
    this.state = {
      contador: 0,
      bispoAtual: {},
      collapsePadres: false,
      collapseDiaconosPermanentes: false,
      collapseDiaconos: false,
      
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

        <div className="conteinerSubTitulo">
          <h2 className="subtituloClero">CONHEÇA A EQUIPE DA DIOCESE</h2>
          <p className="textoSubtitulo">
            O CLERO É COMPOSTO POR DIÁCONOS PERMANENTES, PRESBÍTEROS (PADRES)
            DIOCESANO E POR PRESBÍTEROS RELIGIOSOS. EM COMUNHÃO COM O BISPO
            DIOCESANO, O PRESBÍTERIO ATUA NAS 42 PARÓQUIAS DA DIOCESE E NOS
            SERVIÇOS PASTORAIS E MOVIMENTOS EXISTENTES.
          </p>
        </div>

        <div className="conteinerBispos">
          <button onClick={this.voltar}>&lt;</button>
          <Scrollbars style={{ width: "100%", height: 400 }}>
            <div>{bispos[this.state.contador].nome}</div>
            <div className="bispoFotoTexto">
              <img
                src={"/imagens/Clero/" + bispos[this.state.contador].nomeFoto}
              ></img>
            </div>
            <div id="texto">
              {this.controiTexto(bispos[this.state.contador].texto)}
            </div>
          </Scrollbars>
          <button onClick={this.avancar}>&gt;</button>
        </div>

        <div
          className="tituloClero"
          onClick={() => {
            this.setState({ collapsePadres: !this.state.collapsePadres });
          }}
        >
          <p>PADRES DA DIOCESE DE BAURU</p>
        </div>
        <Collapse isOpen={this.state.collapsePadres}>
          <Scrollbars
            style={{
              height: 450,
              width: "63%",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <div className="conteinerPadresBauru">
              {this.constroiCardPadres()}
            </div>
          </Scrollbars>
        </Collapse>

        <hr />

        <p className="tituloClero">Padres Residindo Fora da Diocese</p>
        <div className="conteinerPadresResidindoFora">
          {this.constroiPadresResidindoFora()}
        </div>
        <hr />

        {/*DIACONOS*/}
        <div className="conteinerDiaconosGeral">
          <div>
            <div
              className="tituloClero"
              onClick={() => {
                this.setState({
                  collapseDiaconosPermanentes:
                    !this.state.collapseDiaconosPermanentes,
                });
              }}
            >
              <p>DIÁCONOS PERMANENTES</p>
            </div>
            <Collapse isOpen={this.state.collapseDiaconosPermanentes}>
              <div className="conteinerDiaconosPermanentes">
                {this.constroiCardDiaconosPermanentes()}
              </div>
            </Collapse>
          </div>
          <div>
            <div
              className="tituloClero"
              onClick={() => {
                this.setState({
                  collapseDiaconos: !this.state.collapseDiaconos,
                });
              }}
            >
              <p>DIÁCONOS</p>
            </div>
            <Collapse isOpen={this.state.collapseDiaconos}>
              <div className="conteinerDiaconosPermanentes">
                {this.constroiCardDiaconosPermanentes()}
              </div>
            </Collapse>
          </div>
        </div>
        <Rodape></Rodape>
      </Container>
    );
  }
}

export default CongregacoesReligiosas;
