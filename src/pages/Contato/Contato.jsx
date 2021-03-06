import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import Titulo from "./../../components/Titulo/Titulo";
import CardContato from './../../components/CardContato/CardContato';
import Container from "@material-ui/core/Container";
import contatos from './../../data/contatos.json';
import CardCidadesContatos from "../../components/CardCidadesContatos/CardCidadesContatos";

import './estilo.css';


class Contato extends Component {

  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  constroiCardsContatos(){
    let titulos = {
      agudos: "Agudos",
      arealva: "Arealva",
      avai: "Avaí",
      bauru: "Bauru",
      boraceia: "Boracéia",
      cabraliaPaulista: "Cabrália Paulista",
      duartina: "Duartina",
      galia: "Gália",
      iacanga: "Iacanga",
      lucianopolis: "Lucianópolis",
      paulistania: "Paulistânia",
      pederneiras: "Pederneiras",
      piratininga: "Piratininga"
    }
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
        <CardCidadesContatos
          cidadeNome = {titulos[cidadeNome]}
          contatosParoquias = {contatosParoquias}
        ></CardCidadesContatos>
      );
      cards.push(card);
    });
    return(
      <div className="conteinerCardsContatos">
        {cards}
      </div>
    );
  }

  render() {
    return (
      <Container style={{backgroundColor: "#F3EEE8"}} border="1px" border-radius="5px"  sm="maxWidth">
        <BarraNavegacao></BarraNavegacao>
        <Titulo titulo={'CONTATO'}></Titulo>
        
        <div> {/*Parte 1 - "entrar em contato direto com a diocese"*/}

            <div className="conteinerDadosContato"> {/**Parte dos dados de contato */}
              <h6>CÚRIA DIOCESANA</h6>
              <div>RUA FERNANDO COSTA, 3-30, JARDIM ESTORIL - BAURU - CEP 17014-130</div>
              <div>CAIXA POSTAL 550 - 17015-8706</div>
              <div>FONE: (14) 3879-8706</div>
              <div>E-MAIL: CURIA@BISPADOBAURU.ORG.BR</div>
              
              <hr />
              
              <h6>HORÁRIO DE FUNCIONAMENTO</h6>
              <div>DE 2ª A 6ª FEIRA: DAS 8H ÀS 12H / DAS 13H ÀS 17H30</div>
              <hr />
            </div>
            
            <div className="conteinerInputsContato"> {/**Parte dos inputs */}
              <input className="inputContato" type="text" placeholder="Nome: " />
              <input className="inputContato" type="text" placeholder="E-mail: " />
              <input className="inputContato" type="text" placeholder="Assunto: " />
              <textarea className="inputContato" cols="30" rows="10" placeholder="Mensagem: "></textarea>
            </div>
            <button id="botaoEnviar">Enviar</button>
        </div>

        {/*Parte 2 - "Informações especificas para cada paroquia"*/}
        <div > 
            {this.constroiCardsContatos()}
        </div>
        <Rodape></Rodape>
      </Container>
    );
  }
}

export default Contato;
