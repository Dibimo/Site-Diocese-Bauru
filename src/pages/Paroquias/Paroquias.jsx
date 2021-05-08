import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import CardParoquia from "./../../components/CardParoquia/CardParoquia";
import Titulo from "./../../components/Titulo/Titulo";
import paroquias from "./../../data/paroquias.json";

class Paroquias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opcao: "agudos",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ opcao: event.target.value });
  }

  constroiCards(opcao) {
    if (!Object.keys(paroquias).includes(opcao)) {
      return <div></div>;
    }
    let cards = [];
    let cidadeSelecionada = paroquias[opcao];
    let nomesParoquias = Object.keys(cidadeSelecionada);

    nomesParoquias.map((paroquia) => {
      cards.push(
        <CardParoquia paroquia={cidadeSelecionada[paroquia]}></CardParoquia>
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
          <option value="agudos">Escolha a Cidade</option>
          <option value="agudos">Agudos</option>
          <option value="avai">Avai</option>
          <option value="boraceia">Boraceia</option>
          <option value="pederneiras">Pederneiras</option>
          <option value="cabraliaPaulista">Cabralia Paulista</option>
          <option value="duartina">Duartina</option>
          <option value="galia">Galia</option>
          <option value="lucianopolis">Lucianopolis</option>
          <option value="paulistania">Paulistania</option>
          <option value="piratininga">Piratininga</option>
          <option value="iacanga">Iacanga</option>
          <option value="arealva">Arealva</option>
        </select>
        {this.constroiCards(this.state.opcao)}
        <Rodape></Rodape>
      </div>
    );
  }
}

export default Paroquias;
