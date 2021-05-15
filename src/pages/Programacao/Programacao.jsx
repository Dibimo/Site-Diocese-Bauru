import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import Container from "@material-ui/core/Container";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./estilos.css"
import feriados from "../../data/feriados.json";
class Programacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date(),
    };
    // this._data = new Date();
    this._eventos = null;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({ data: date });
  }
  constroiEvento(data) {
    let mes = data.toLocaleString("default", { month: "long" });
    let dia = data.getDate();
    let meses = Object.keys(feriados);
    if (!meses.includes(mes)) {
      return null;
    }
    let dias = Object.keys(feriados[mes]);
    if (dias.includes(mes + dia)) {
      let eventosDia= [];
      let divs = [];
      eventosDia = feriados[mes][mes+dia];
      eventosDia.map((evento)=>{
        divs.push(<div>{evento}<br></br></div>);
      });
      return divs;
    }
    return null;
  }

  render() {
    return (
      <Container
        style={{ backgroundColor: "#F3EEE8" }}
        border="1px"
        border-radius="5px"
        sm="maxWidth"
      >
        <BarraNavegacao></BarraNavegacao>

        <Calendar
          onClickDay={this.handleChange}
          next2Label={null}
          prev2Label={null}
          showNeighboringMonth={false}
          view={"mounth"}
          
          tileClassName={({ date })=> {
            let classes = '';
            if(date.getDay() === 0){
              classes = "domingo ";
            }
            if (this.constroiEvento(date)){
              classes += "evento"
            }
              return classes;
          }
          }
        />
        <div>
          <p>Aqui é o painel de informações</p>
          {this.constroiEvento(this.state.data)}
        </div>

        <TwitterTimelineEmbed
          sourceType="@Pontifex_pt"
          screenName="Pontifex_pt"
          options={{ height: 400, width: 400 }}
        />

        <Rodape></Rodape>
      </Container>
    );
  }
}

export default Programacao;
