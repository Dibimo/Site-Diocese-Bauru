import React, { Component } from 'react';
import "./estilo.css"

class Rodape extends Component {
  
  render() {
    return (
      <div className="tintura" align="center">
        <div className="margem"></div>
        <div  font="bold"><h5>CENTRO DIOCESANO DE PASTOAL | FONE: (14) 3234-6908</h5></div>
        <div><h6><strong>HORÁRIO DE ATENDIMENTO</strong>: DE SEGUNDA À SEXTA, 8H - 12H E 13H - 17H30</h6></div>
        <div><h6>RUA FERNANDO COSTA, 3-30 - JARDIM ESTORIL - BAURU (SP)</h6></div>
        <div><h6>E-MAIL: BISPADOBAURU@BISPADOBAURU.ORG.BR</h6></div>
      </div>
    );
  }  
}

export default Rodape;