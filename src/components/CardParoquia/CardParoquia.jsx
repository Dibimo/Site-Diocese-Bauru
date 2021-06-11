import React, { Component } from "react";
import { Collapse} from 'reactstrap';
import './estilo.css'

class CardParoquia extends Component {
  constructor(props) {
    super(props);
    this.caminhoImagem = "";
    this.paroquia = {};
    this.state = {
      collapsed: false,
    };
  }

  constroiHorariosMissas(vetor) {
    let horariosDivs = [];
    vetor.map((horario) => {
      horariosDivs.push(<div> &ensp; {horario}</div>);
    });
    return horariosDivs;
  }

  constroiCapelas(vetor) {
    let capelas = [<div>Capelas</div>];
    if(vetor.length == 0){
      capelas.push(<div>Matriz</div>)
      return (capelas);
    }
    let capelasDivs = [];
    vetor.map((capela) => {
      capelasDivs.push(
        <div>
          <div>&ensp;{capela.nome}</div>
          <div>&ensp;{capela.local}</div>
          <div>{this.constroiHorariosMissas(capela.horarios)}</div>
          <hr></hr>
        </div>
      );
    });
    capelas.push(capelasDivs);
    return capelas;
  }

  constroiInformacoesAdicionais(info){
    let naoEhUmaImagem = true;
    let divs = [];
    //montando as informações adicionais PADRÃO
    divs.push(
      <div>Padroeiro: {info.padroeiro}</div>,
      <div>Região Pastoral: {info.regiaoPastoral}</div>,
      <div>Criada em: {info.criacao}</div>,
      <div>Data da Festa: {info.festa}</div>
    );

    let imagens = [
      /paroco/,
      /administradorParoquial/, 
      /diacono/, 
      /vigario/, 
    ];
    let infoAdicionalNaoPadrao = Object.keys(info);

    //removendo as informações padrões, para não haver repetição de conteudo.
    infoAdicionalNaoPadrao.splice(infoAdicionalNaoPadrao.indexOf('padroeiro'),1);
    infoAdicionalNaoPadrao.splice(infoAdicionalNaoPadrao.indexOf('regiaoPastoral'),1);
    infoAdicionalNaoPadrao.splice(infoAdicionalNaoPadrao.indexOf('criacao'),1);
    infoAdicionalNaoPadrao.splice(infoAdicionalNaoPadrao.indexOf('festa'),1);

    //montando as informações especificas de cada paróquia
    infoAdicionalNaoPadrao.map((adicional, key)=>{
      naoEhUmaImagem = true;
      let imagem = null;
      if(imagens.some(img => img.test(adicional))){ //verifica se a informação é uma imagem
        imagem = (
          <div className="conteinerFotoImagem">
            <img
              src={this.props.caminhoImagem + adicional + ".webp"}
              alt={info[adicional]}
              className="imagemPerfil"
            />
            <div className="nomePessoa"
            >{info[adicional]}</div> {/*Nome da pessoa na foto */}
          </div>
        );
        naoEhUmaImagem = false;
      }
      divs.push( //monta todos os dados
        <div key={key}>
          {imagem}
          {naoEhUmaImagem && <div>{info[adicional]}</div>}
        </div>
      );
    });
    return divs; //retorna as divs com todos os dados montados
  }


  render() {
    let nomeParoquia = this.props.paroquia.nome;
    return (
      <div 
        className="container cardParoquiaComponente"
      >
        <div 
          className="conteinerTituloFoto"
          onClick={()=>{this.setState({collapsed: !(this.state.collapsed)})}}
        >
          <img 
            src={this.props.caminhoImagem+ "paroquia.webp"} 
            alt={nomeParoquia} 
            className="fotoParoquia"
          />
          <h5>{nomeParoquia}</h5>

        </div>
        <Collapse isOpen={this.state.collapsed}>

          <p>Horarios das Missas Matriz:</p>
          {this.constroiHorariosMissas(this.props.paroquia.horariosDeMissa)}
          <hr />
          {this.constroiCapelas(this.props.paroquia.capelas)}

          <h6>Informações Adicionais</h6>

          <div className="conteinerInfoAdicional">
            {this.constroiInformacoesAdicionais(this.props.paroquia.informacoesAdicionais)}
          </div>

          <iframe src={this.props.paroquia.mapa.link} width="500" height="450" allowfullscreen="" style={{border: 0}} loading="lazy"></iframe>
        </Collapse>
      </div>
    );
  }
}

export default CardParoquia;
