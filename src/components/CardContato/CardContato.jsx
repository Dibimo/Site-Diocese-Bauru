import React, { Component } from "react";
import './estilo.css';
class CardContato extends Component {
  constructor(props) {
    super(props);
    this.paroquia = {};
  }

  constroiContato(infoContato){
    return (
      <div>
        <div>
          <img 
            src="/imagens/localizacaoIcone.png" 
            alt="localização-icone" 
            className="iconeContato"
          />
          Rua: {infoContato.rua}
        </div>
        <div>
        <img 
          src="/imagens/emailIcone.png" 
          alt="icone-email" 
          className="iconeContato"
        /> 
        E-mail: {infoContato.email}
        </div>
        <div>
          <img 
            src="/imagens/telefoneIcone.png" 
            alt="icone-telefone" 
            className="iconeContato"
          />
          Telefone(s): {infoContato.telefone}
        </div>
      </div>
    );
  }


  render() {
    return (
      <div className="containerInformacoesParoquias">
        <h6>{this.props.paroquia.nome}</h6>
        <div>{this.constroiContato(this.props.paroquia.contato)}</div>
      </div>
    );
  }
}

export default CardContato;
