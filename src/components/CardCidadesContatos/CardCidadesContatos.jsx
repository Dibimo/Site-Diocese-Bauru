import React, { Component } from "react";
import { Collapse } from "reactstrap";
import './estilo.css';

class CardCidadesContatos extends Component {
  constructor(props) {
    super(props);
    this.cidadeNome = "";
    this.contatosParoquias = [];
    this.paroquia = {};
    this.state = {
      collapsed: false,
    };
    this.converteBoolInt = this.converteBoolInt.bind(this);
    this.caminhos = ["/imagens/setaParaBaixo.png","/imagens/setaParaCima.png"]
  }

  converteBoolInt(estaAberto){
    return estaAberto ? 1: 0
  }

  render() {
    return (
      <div
        className="containerCidadesContatos"
        style={{margin: "2px" }}
      >
        <div 
          className="conteinerTituloSeta"
          onClick={() => {
            this.setState({ collapsed: !this.state.collapsed });
            this.setState({ caminhoParaSeta: this.caminhos[this.converteBoolInt(this.state.collapsed)] });
            // this.viraSeta(this.state.collapsed);
          }}
        >
          <h5>{this.props.cidadeNome}</h5>
          <img src={this.caminhos[this.converteBoolInt(this.state.collapsed)]} alt="seta" />

        </div>
        <Collapse isOpen={this.state.collapsed}>{this.props.contatosParoquias}</Collapse>
      </div>
    );
  }
}

export default CardCidadesContatos;
