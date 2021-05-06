import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";


class Contato extends Component {
  render() {
    return (
      <div className="container">
        <BarraNavegacao></BarraNavegacao>
        {/* Titulo */}
        <div> {/*Parte 1 - "entrar em contato direto com a diocese"*/}
            <div style={{textAlign: "center"}}>
                <h4>CÚRIA DIOCESANA</h4>
                <div>RUA FERNANDO COSTA, 3-30, JARDIM ESTORIL - BAURU - CEP 17014-130</div>
                <div>CAIXA POSTAL 550 - 17015-8706</div>
                <div>FONE: (14) 3879-8706</div>
                <div>E-MAIL: CURIA@BISPADOBAURU.ORG.BR</div>
            </div>
            <hr />
            <div style={{textAlign: "center"}}>
                <h4>HORÁRIO DE FUNCIONAMENTO</h4>
                <div>DE 2ª A 6ª FEIRA: DAS 8H ÀS 12H / DAS 13H ÀS 17H30</div>
            </div>
            <hr />
            <input style={{display: "block", marginBottom: "10px"}} type="text" placeholder="Nome: " />
            <input style={{display: "block", marginBottom: "10px"}} type="text" placeholder="E-mail: " />
            <input style={{display: "block", marginBottom: "10px"}} type="text" placeholder="Assunto: " />
            <textarea cols="30" rows="10" placeholder="Mensagem: "></textarea>
        </div>
        <div> {/*Parte 2 - "Informações especificas para cada paroquia"*/}
            <div>Informações</div>
        </div>
        <Rodape></Rodape>
      </div>
    );
  }
}

export default Contato;
