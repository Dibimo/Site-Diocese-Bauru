import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import Titulo from "./../../components/Titulo/Titulo";
import CardContato from './../../components/CardContato/CardContato';
import contatos from './../../data/contatos.json';

class Contato extends Component {

  constroiCardsContatos(){
    let cards = [];
    let cidadesNomes = Object.keys(contatos);
    cidadesNomes.map((cidadeNome)=>{
      var cidade = contatos[cidadeNome];
      let paroquias = Object.keys(cidade);
      let contatosParoquias = paroquias.map((paroquia) => {
        let informacoes = [];
        informacoes.push(
          <div>
            <CardContato paroquia={cidade[paroquia]}></CardContato>
          </div>
        );
        return informacoes;
      });
      let card = (
        <div className="container" style={{ border: "1px solid", margin: "2px" }}>
          <h5>{cidadeNome}</h5>
          {contatosParoquias}
        </div>
      );
      cards.push(card);
    });
    return(
      <div>
        {cards}
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <BarraNavegacao></BarraNavegacao>
        <Titulo titulo={'Contato'}></Titulo>
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
            <div>{this.constroiCardsContatos()}</div>
        </div>
        <Rodape></Rodape>
      </div>
    );
  }
}

export default Contato;
