import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import Titulo from "./../../components/Titulo/Titulo";
import Container from "@material-ui/core/Container";


class CongregacoesReligiosas extends Component {
  
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
        <div align="center">
          <button width="200px" height="80px">Masculinas</button>
          <button width="200px" height="80px">Femininas</button>
        </div>
        <Rodape></Rodape>
      </Container>
    );
  }
}

export default CongregacoesReligiosas;
