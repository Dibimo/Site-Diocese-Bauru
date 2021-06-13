import React, { Component } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import Titulo from './../../components/Titulo/Titulo'
import Container from "@material-ui/core/Container";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Calendar } from "react-calendar";
import { Collapse } from "reactstrap";
import "react-calendar/dist/Calendar.css";
import "./estilos.css"
import feriados from "../../data/feriados.json";
class Programacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date(),
      collpse: false,
    };
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
      divs.push(
        <h6>{dia} DE {mes.toUpperCase()}</h6>
      );
      eventosDia = feriados[mes][mes+dia];
      eventosDia.map((evento)=>{
        divs.push(<li>{evento}<br></br></li>);
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
        <Titulo titulo={"PROGRAMAÇÃO"}></Titulo>

        <div id="conteinerCalendario">
          <Calendar
            onClickDay={this.handleChange}
            next2Label={null}
            prev2Label={null}
            showNeighboringMonth={false}
            view={"mounth"}
            calendarType="US"
            tileClassName={({ date }) => {
              let classes = "";
              if (date.getDay() === 0) {
                classes = "domingo ";
              }
              if (this.constroiEvento(date)) {
                classes += "evento";
              }
              return classes;
            }}
          />
          <div id="conteinerPainelInfo">
            <Collapse isOpen={this.constroiEvento(this.state.data)}>
              <h5>
                <img id="iconeInfo" src="/imagens/Programacao/iconeInformacoes.png" alt="icone"/>
                INFORMAÇÕES SOBRE O EVENTO
              </h5>
              
              <div className="conteinerInfoEvento">
                {this.constroiEvento(this.state.data)}
              </div>
            </Collapse>
          </div>
        </div>
        <div id="redesSociais">
          <TwitterTimelineEmbed
            sourceType="@Pontifex_pt"
            screenName="Pontifex_pt"
            options={{ height: 450, width: 400 }}
          />
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdiocesedebauru&tabs=timeline&width=400&height=450&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="400"
            height="450"
            style={{ border: "none" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>

        <Rodape></Rodape>
      </Container>
    );
  }
}

export default Programacao;
