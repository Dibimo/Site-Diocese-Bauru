import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

class PainelRotativo extends Component {

  constructor(props){
    super(props)
    this.nomesImagens = [];
    this.diretorio = "";
    this.style= {};
  }


  

  render() {
    console.log(this.props.diretorio);
    return (
      <div className="">
        <AwesomeSlider style={this.props.style}>
          {this.props.nomesImagens.map((image) => (
            <div
              data-src={
                `${this.props.diretorio + image.replace("./", "")}`
              }
            ></div>
          ))}
        </AwesomeSlider>
      </div>
    );
  }
}

export default PainelRotativo;
