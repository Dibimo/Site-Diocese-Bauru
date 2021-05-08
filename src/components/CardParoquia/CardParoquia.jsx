import React, { Component } from "react";

class CardParoquia extends Component {
  constructor(props) {
    super(props);
    this.paroquia = {};
  }
  render() {
    
    return (
      <div className="container">
        <div>Nome: {this.props.paroquia.nome}</div>
        
      </div>
    );
  }
}

export default CardParoquia;
