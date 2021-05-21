import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import CardParoquia from "./../../components/CardParoquia/CardParoquia";
import Titulo from "./../../components/Titulo/Titulo";
import paroquias from "./../../data/paroquias.json";
import "./estilo.css";

class Paroquias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opcao: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ opcao: event.target.value });
  }

  constroiCards(opcao) {
    if (!Object.keys(paroquias).includes(opcao)) {
      return null;
    }
    let cards = [];
    let cidadeSelecionada = paroquias[opcao];
    let nomesParoquias = Object.keys(cidadeSelecionada);

    nomesParoquias.map((paroquia) => {
      //caminho para a pasta de imagens de cada paroquia
      let caminhoImagem = "imagens/Paroquias/" + opcao + "/" + paroquia + "/";
      cards.push(        
        <CardParoquia paroquia={cidadeSelecionada[paroquia]} caminhoImagem={caminhoImagem}></CardParoquia>
      );
    });
    return cards;
  }

  render() {
    return (
      <div className="container">
        <BarraNavegacao></BarraNavegacao>
        <Titulo titulo={"Paróquias"}></Titulo>
        <select
          name="selecionaCidade"
          id="selecionadaCidade"
          onChange={this.handleChange}
        >
          <option value="">Escolha a Cidade</option>
          <option value="agudos">Agudos</option>
          <option value="arealva">Arealva</option>
          <option value="avai">Avai</option>
          <option value="bauru">Bauru</option>
          <option value="boraceia">Boraceia</option>
          <option value="cabraliaPaulista">Cabralia Paulista</option>
          <option value="duartina">Duartina</option>
          <option value="galia">Galia</option>
          <option value="iacanga">Iacanga</option>
          <option value="lucianopolis">Lucianopolis</option>
          <option value="paulistania">Paulistania</option>
          <option value="pederneiras">Pederneiras</option>
          <option value="piratininga">Piratininga</option>
        </select>
        <div className="conteinerParoquias">
          {this.constroiCards(this.state.opcao)}
        </div>
        <Rodape></Rodape>
      </div>
    );
  }
}

export default Paroquias;
