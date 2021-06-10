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
  }

  render() {
    return (
      <div
        className="containerCidadesContatos"
        style={{margin: "2px" }}
      >
        <h5 onClick={() => {
          this.setState({ collapsed: !this.state.collapsed });
        }}>{this.props.cidadeNome}</h5>
        <Collapse isOpen={this.state.collapsed}>{this.props.contatosParoquias}</Collapse>
      </div>
    );
  }
}

export default CardCidadesContatos;
