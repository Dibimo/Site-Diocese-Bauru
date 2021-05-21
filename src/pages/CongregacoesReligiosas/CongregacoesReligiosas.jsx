import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import Titulo from "./../../components/Titulo/Titulo";
import congregacoes from "./../../data/congregracoesReligiosas.json";
import Container from "@material-ui/core/Container";
import CardCongregacao from "./CardCongregacao/CardCongregacao.jsx";
import './estilos.css';
class CongregacoesReligiosas extends Component {

  controiCards(congregacoes){
    let congregacoesNomes = Object.keys(congregacoes);
    let cards = [];
    congregacoesNomes.map((congregacaoNome)=>{
      cards.push(
        <CardCongregacao congregacao={congregacoes[congregacaoNome]}></CardCongregacao>
      );
    });
    return cards;
  }
  constroiParoquias(){
    //Controi 
    let paroquiasDivs = [];
    congregacoes.paroquias.map((paroquia)=>{
      paroquiasDivs.push(
        <div>{paroquia}</div>
      );
    });
    return (
      <div className="paroquiasCongregacoesMasculinas conteudoCardCongregacao" style={{ border: "1px solid" }}>
        Paróquias:
        {paroquiasDivs}
      </div>
    );
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
        <Titulo titulo="Congregações Religiosas"></Titulo>

        <div className="congregacoesConteiner">
          <section className="congregacoesMasculinas">
            <button width="200px" height="80px">Masculinas</button>
            {this.controiCards(congregacoes.masculinas)}
            {this.constroiParoquias()}
          </section>

          <section className="congregacoesFemininas">
            <button width="200px" height="80px">Femininas</button>
            {this.controiCards(congregacoes.femininas)}
          </section>
        </div>
        <section className="outrosCongregacoesConteiner">
          <div className="outrosCongregacoes">
            {this.controiCards(congregacoes.outras)}
          </div>
        </section>
        <Rodape></Rodape>
      </Container>
    );
  }
}

export default CongregacoesReligiosas;
