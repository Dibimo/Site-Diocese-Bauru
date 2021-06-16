import React, { Component } from 'react';
import BarraNavegacao from './../../components/BarraNavegacao/BarraNavegacao'
import Rodape from './../../components/Rodape/Rodape'
import Titulo from './../../components/Titulo/Titulo'
import Container from '@material-ui/core/Container';
import "./estilo.css"

class Movimentos extends Component {
  
  render() {
    return(
        <Container style={{backgroundColor: "#F3EEE8"}} border="1px" border-radius="5px"  sm="maxWidth">
        <BarraNavegacao></BarraNavegacao>
        <Titulo titulo="PASTORAIS E MOVIMENTOS"></Titulo>
        <div className="textoInicial">
          <p>
            A DIOCESE DE BAURU ORGANIZA SEU CONSELHO DIOCESANO DE PASTORAL A PARTIR DO BISPO,
            COORDENAÇÃO PASTORAL DIOCESANA E 13 SETORES QUE REÚNEM AS PASTORAIS DIOCESANAS
            E PAROQUIAS, OS MOVIMENTOS, AS ASSOCIAÇÕES E OS SERVIÇOS EXISTENTES.
          </p>
        </div>
        <hr />
        
        
        <div className="organizacaoSetores">

          <div>
            <h3>ORGANIZAÇÃO DO CONSELHO DIOCESANO DE PASTORAL</h3>
            <div className="organizacao">
              <img src="/imagens/Movimentos/esquema.png" alt="esquema" />
            </div>
          </div>

          <div>
            <h3>SETORES</h3>
            <div className="setores">
              <p className="azul">AÇÃO MISSIONÁRIA</p>
              <p className="salmao">BÍBLICO CATEQUÉTICO</p>
              <p className="salmao">MINISTÉRIOS</p>
              <p className="salmao">VIDA E FAMILIA</p>

              <p className="verde">LITURGIA</p>
              <p className="salmao">JUVENTUDE</p>
              <p className="salmao">ESPIRITUALIDADE</p>
              <p className="salmao" id="charis">CHARIS - RENOVAÇÃO CARISMÁTICA CATÓLICA</p>

              <p className="azul">CARIDADE</p>
              <p className="azul">EDUCAÇÃO E CULTURA</p>
              <p className="azul">COMUNICAÇÃO SOCIAL</p>
              <p className="azul" id="bensTemporais">BENS TEMPORAIS DA IGREJA</p>
            </div>

          </div>
        
        </div>

        <p id="paragrafoIntermediario">
          COM BASE NOS PILARES DA AÇÃO EVANGELIZADORA NO BRASIL, ASSIM SE CONCENTRAM OS
          SETORES POR AFINIDADE DE AÇÃO:
        </p>

        <div className="pilaresSetores">
          <div>
            <h3>OS PILARES DA AÇÃO EVANGELIZADORA</h3>
            <div className="pilares">
              <img src="/imagens/Movimentos/pilares.png" alt="pilares" />
            </div>
          </div>

          <div>
            <h3>SETORES PARA EVANGELIZAÇÃO</h3>
            <div className="evangelizacao">
              
              <p className="amarelo">BÍBLICO CATEQUÉTICO</p>
              <p className="amarelo">MINISTÉRIOS, VOCAÇÕES, VIDA RELIGIOSA</p>
              <p className="amarelo">VIDA E FAMÍLIA</p>

              <p className="amarelo">JUVENTUDE</p>
              <p className="amarelo">ESPIRITUALIDADE</p>
              <p id="charis" className="amarelo">CHARIS RENOVAÇÃO CARISMÁTICA CATÓLICA</p>
            </div>

          </div>
        </div>

        <hr />

        <div className="missaoAcaoSocial">
          
          <div>
            <h3>MISSÃO EIXO TRANSVERSAL</h3>
            <div className="missao">
              <img src="/imagens/Movimentos/eixoTransversal.png" alt="eixo" />
            </div>
          </div>
          
          <div>
            <h3>AÇÃO SOCIAL DA IGREJA</h3>
            <div className="social">
              <p className="azul">CARIDADE</p>
              <p className="azul">BENS TEMPORAIS DA IGREJA</p>
              <p className="azul">COMUNICAÇÃO SOCIAL</p>
              <p className="azul">EDUCAÇÃO E CULTURA</p>
            </div>
          </div>
        </div>

        <Rodape></Rodape>
      </Container> 
    );
  }
}

export default Movimentos;