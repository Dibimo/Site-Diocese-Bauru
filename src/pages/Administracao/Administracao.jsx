import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";



class Administracao extends Component {
  
  render() {
    return (
      <div className="container">
        <BarraNavegacao></BarraNavegacao>
        <div>Conteudo</div>
        <Rodape></Rodape>
      </div>
    );
  }
}

export default Administracao;
