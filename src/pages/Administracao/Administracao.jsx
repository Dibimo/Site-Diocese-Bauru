import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import Titulo from './../../components/Titulo/Titulo';

import './estilo.css'

class Administracao extends Component {

  constructor(props){
    super(props);
    this.state = {
      abertoConselhoDiocesano: false,
      abertoConselhoDeLeigos: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.abrirEFechar = this.abrirEFechar.bind(this)

  };

  handleChange(){
    let estadoAtual = this.state.abertoConselhoDiocesano;
    this.setState({abertoConselhoDiocesano: !(estadoAtual)});
  }

  abrirEFechar(){
    let estadoAtual = this.state.abertoConselhoDeLeigos;
    this.setState({abertoConselhoDeLeigos: !(estadoAtual)})
  }

  
  render() {
    return (
      <div className="container">
        <BarraNavegacao></BarraNavegacao>
        <Titulo titulo="Administração"></Titulo>
        <div className="primeiroConteiner">
          <div className="primeiroConteinerItem">
          <h6>Câmera auxililar eclesiástica de Bauru Vigário Judicial:</h6>
          <p>Pe. Luiz Eduardo Monteiro Fontana</p>
          <p>
            <strong>Fone: </strong>(14)3234-6908
          </p>
          <p>
            <strong>E-mail: </strong>camaraeclisiastica@bispadobauru.org.br
          </p>
        </div>
          <div className="primeiroConteinerItem">

            <div className="">
              <h6>BISPO DIOCESANO</h6>
              <p>Dom Rubens Sevilha, OCD</p>
              <p><span>Vigário Geral: </span> Padre Luiz Eduardo Monteiro</p>
            </div>

            <div className="">
              <h6>ECÔNOMO DIOCESANO</h6>
              <p>Pe. Marcos Eduardo Pavan</p>
              <p><span>Chanceler: </span> Padre Padre Adinam R. da Silva</p>
            </div>

          </div>
          

          
        </div>

        <hr />
        
        <div className="conteinerConselhoDiocesano">
          <p className="tituloConselhoDiocesano" onClick={this.handleChange}>Conselho Presbiteral Diocesano</p>
          {this.state.abertoConselhoDiocesano && (
            <>
              <p>Bispo Diocesano: Dom Rubens Sevilha, OCD</p>
              <p>Vigário Geral: Pe. Luiz Eduardo Monteiro Fontana</p>
              <p>Coordenador de Pastoral: Pe. Gustavo Henrique Crepaldi</p>
              <p>Ecônomo Diocesano: Pe. Marcos Eduardo Pavan</p>
              <p>Reitor Seminário Diocesano: Pe. Márcio José Cattache</p>
              <p>Rep. dos Presbíteros: Pe. Wellington Supriano</p>
              <p>Rep. Regiões Pastorais 1 e 3: Pe. Carlos Henrique Siqueira</p>
              <p>Rep. Região Pastoral 2: Pe. Frei Alfredo de Souza, SIA</p>
              <p>Rep. Regiões Pastorais 4 e 5: Pe. Paulo Tavares de Brito</p>
              <p>Rep. Regiões Pastorais 6 e 7: Pe. Luis Antônio Carqueijo Sé</p>
              <p>Indicados pelo Bispo Diocesano:<br /> Pe. Adinam Roniere da Silva e Pe. Ângelo Ademir Mezzari, RCJ</p>
            </>
          )
          }
          
        </div>

        <hr />
        
        <h4 style={{textAlign: 'center',}}>CONSELHO PARA ASSUNTOS ECONÔMICOS</h4>
        
        <div className="segundoConteiner">

          <div className="segundoConteinerItem">
            <div className="">
              <p><span>Presidente: </span>Wilson Batista Ferreira</p>
              <p>Rua Fortunato Resta, 12-44, Jardim Jussara - Bauru - SP CEP 17055-002</p>
              <p><strong>Fones: </strong>(14) 3018-0112 / 98816-4400 / 2016-4400</p>
              <p><strong>E-mail: </strong>wilson.tuim@hotmail.com</p>
            </div>
            <div className="">
              <p><span>Vice-presidente: </span>Fátima Aparecida Ferre</p>
              <p>Rua Heitor de Andrada Campos, 2-177, Jardim Prudência - Bauru - SP - CEP 17065-032</p>
              <p><strong>Fones: </strong>(14) 32-3623 / 3235-4067 / 99794-5611</p>
              <p><strong>E-mail: </strong>fatimaapferre@yahoo.com.br</p>
            </div>

          </div>
          
          <div className="segundoConteinerItem">

            <div className="">
              <p><span>Secretário: </span>Paulo Roberto Franco</p>
              <p>Rua Doutor José Raniere, 12-104, Jardim Marambá Bauru - SP - CEP 17030-370</p>
              <p><strong>Fones: </strong>(14) 98828-3934</p>
              <p><strong>E-mail: </strong>paulofranco@terra.com.br</p>
            </div>
            <div className="">
              <p><span>Tesoureiro: </span>Luiz Vitório Orti</p>
              <p>Rua Alfredo Ruiz, 17-77, Jardim Estoril Bauru - SP - CEP 17016-020</p>
              <p><strong>Fones: </strong>(14) 98135-0299</p>
              <p><strong>E-mail: </strong>luiz.orti@uol.com.br</p>
            </div>

          </div>


        </div>

        <hr />

        <div className="conteinerConselhoDeLeigos">
          <p onClick={this.abrirEFechar} className="tituloConselhoDeLeigos">Principal objetivos do Conselhor de Leigos</p>
            {this.state.abertoConselhoDeLeigos && (
              <>
                <ul>
                  <li>Despertar a consciência da identidade, da vocação e missão dos leigos e leigas na busca de uma presença efetivamente transformadora no mundo e na Igreja.</li>
                  <li>Incentivar a Vivência eclesial, mediante a troca de experiências e convívio entre os diversos movimentos, pastorais, leigos e leigas engajados em paróquias e comunidades, no respeito mútuo e na busca de caminhos e respostas comuns.</li>
                  <li>Criar e incentivar mecanismos para oferecer uma formação integral, gradual, buscando capacitá-los para que possam responder com eficácia aos desafios a que são chamados no exercício de sua vocação.</li>
                  <li>Levar leigos e leigas a descobrirem e vivenciarem sua espiritualidade nos seus ambientes de trabalho, de lazer, de convívio cotidiano, à moda do sal e fermento.</li>
                  <li>Incentivar a articulação e organização do laicato nos diferentes níveis da Diocese.</li>
                  <li>Estimular a participação permanente do laicato nos processos de planejamento, decisão, execução e avaliação da Ação Evangelizadora da Igreja.</li>
                  <li>Representar o laicato junto aos setores organizados da Igreja Católica e outras Igrejas Cristãs e da própria sociedade.</li>
                  <li>Fazer-se presente na caminhada ecumênica, contribuindo e incentivando a comunhão entre leigos católicos e de outras Igrejas Cristãs, na base do Povo de Deus.</li>
                </ul>
              </>
            )}
            
        </div>
        <Rodape></Rodape>
      </div>
    );
  }
}

export default Administracao;
