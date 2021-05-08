import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import CardParoquia from "./../../components/CardParoquia/CardParoquia";
import paroquias from "./../../data/paroquias.json";

class Paroquias extends Component {
  constroiCards(cidade) {
    let cards = [];
    let nomesParoquias = Object.keys(cidade);
    nomesParoquias.map((paroquia)=>{
        cards.push(
            <CardParoquia
                paroquia = {cidade[paroquia]}
            ></CardParoquia>
        );
    });
    return cards;
  }

  render() {
    return (
      <div className="container">
        <BarraNavegacao></BarraNavegacao>
        <select name="selecionaCidade" id="selecionadaCidade">
          <option value="agudos">Agudos</option>
        </select>
        {
            this.constroiCards(paroquias['agudos'])
        }
        <Rodape></Rodape>
      </div>
    );
  }
}

export default Paroquias;
