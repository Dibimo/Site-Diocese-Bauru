import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import Titulo from "./../../components/Titulo/Titulo";


class CongregacoesReligiosas extends Component {
  
  render() {
    return (
      <div className="container">
        <BarraNavegacao></BarraNavegacao>
        <Titulo titulo={"Congregações Religiosas"}></Titulo>
        
        <Rodape></Rodape>
      </div>
    );
  }
}

export default CongregacoesReligiosas;
