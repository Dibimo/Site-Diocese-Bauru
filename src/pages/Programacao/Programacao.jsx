import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import Container from "@material-ui/core/Container";
import { TwitterTimelineEmbed } from 'react-twitter-embed';


class Programacao extends Component {
  
  render() {
    return (
      <Container
        style={{ backgroundColor: "#F3EEE8" }}
        border="1px"
        border-radius="5px"
        sm="maxWidth"
      >
        <BarraNavegacao></BarraNavegacao>
        <TwitterTimelineEmbed
          sourceType="@Pontifex_pt"
          screenName="Pontifex_pt"
          options={{ height: 400, width: 400 }}
        />
        
        <Rodape></Rodape>
      </Container>
    );
  }
}

export default Programacao;
