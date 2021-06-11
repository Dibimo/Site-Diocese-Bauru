import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import CardParoquia from "./../../components/CardParoquia/CardParoquia";
import Titulo from "./../../components/Titulo/Titulo";
import paroquias from "./../../data/paroquias.json";
import Container from "@material-ui/core/Container";
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
    (this.seletor.blur());
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
      <Container
        style={{ backgroundColor: "#F3EEE8" }}
        border="1px"
        border-radius="5px"
        sm="maxWidth"
      >
        <BarraNavegacao></BarraNavegacao>
        <Titulo titulo={"PARÓQUIAS"}></Titulo>
        <div className="conteinerSeletorCidades">
          <div>Selecione uma cidade: </div>
          <select
            name="selecionaCidade"
            id="selecionadaCidade"
            className="seletorCidades"
            onChange={this.handleChange}
            ref={(seletor) => {this.seletor = seletor;}}
          >
            <option className="opcaoCidade" value="">Escolha a Cidade</option>
            <option className="opcaoCidade" value="agudos">Agudos</option>
            <option className="opcaoCidade" value="arealva">Arealva</option>
            <option className="opcaoCidade" value="avai">Avai</option>
            <option className="opcaoCidade" value="bauru">Bauru</option>
            <option className="opcaoCidade" value="boraceia">Boraceia</option>
            <option className="opcaoCidade" value="cabraliaPaulista">Cabralia Paulista</option>
            <option className="opcaoCidade" value="duartina">Duartina</option>
            <option className="opcaoCidade" value="galia">Galia</option>
            <option className="opcaoCidade" value="iacanga">Iacanga</option>
            <option className="opcaoCidade" value="lucianopolis">Lucianopolis</option>
            <option className="opcaoCidade" value="paulistania">Paulistania</option>
            <option className="opcaoCidade" value="pederneiras">Pederneiras</option>
            <option className="opcaoCidade" value="piratininga">Piratininga</option>
          </select>
        </div>
        {this.state.opcao && (
          <div>Clique no nome da paróquia para saber mais</div>
        )}
        <div className="conteinerParoquias">
          {this.constroiCards(this.state.opcao)}
        </div>
        <Rodape></Rodape>
      </Container>
    );
  }
}

export default Paroquias;
