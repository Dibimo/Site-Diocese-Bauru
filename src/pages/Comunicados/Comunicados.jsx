import React, { Component, useEffect, useState } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import Titulo from "./../../components/Titulo/Titulo";
import Paginacao from "./../../components/Paginacao/Paginacao";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import comunicadosDiocese from "./../../data/comunicadosDiocese.json";
import atosDoGoverno from "./../../data/atosDoGoverno.json";
import "./estilo.css";

function Comunicados() {
  const [deslocamentoDiocese, setDeslocamentoDiocese] = useState(0);
  const [deslocamentoAtosGov, setDeslocamentoAtoGov] = useState(0);

  const totalComunicados = comunicadosDiocese.length; //total de posts
  const totalAtosGov = atosDoGoverno.length; //total de atosDoGoverno

  const [comunicados, setComunicados] = useState([]);
  const [noticiasVisiveis, setNoticiasVisiveis] = useState([]);

  useEffect(() => {
    let vetor = [comunicadosDiocese[deslocamentoDiocese]];
    if (deslocamentoDiocese + 1 < totalComunicados) {
      vetor.push(comunicadosDiocese[deslocamentoDiocese + 1]);
    }
    setComunicados(vetor);
  }, [deslocamentoDiocese]);

  useEffect(() => {
    let vetor = [atosDoGoverno[deslocamentoAtosGov]];
    if (deslocamentoAtosGov + 1 < totalAtosGov) {
      vetor.push(atosDoGoverno[deslocamentoAtosGov + 1]);
    }
    if (deslocamentoAtosGov + 2 < totalAtosGov) {
      vetor.push(atosDoGoverno[deslocamentoAtosGov + 2]);
    }

    setNoticiasVisiveis(vetor);
  }, [deslocamentoAtosGov]);

  const constroiCards = (vetor, tipo, pastaImagens) => {
    let cards = [];
    vetor.map((item) => {
      cards.push(
        <li className="cardConteudo ">
          <Link to={{ pathname: "/conteudo_expandido", conteudo: item, tipo }}>
            <img
              className={"capa "+tipo}
              src={"/imagens/" + pastaImagens + "/" + item.capa}
              alt="capa"
            />
            <p className="tituloConteudo">{item.titulo}</p>
          </Link>
        </li>
      );
    });
    return cards;
  };

  return (
    <Container
      style={{ backgroundColor: "#F3EEE8" }}
      border="1px"
      border-radius="5px"
      sm="maxWidth"
    >
      <BarraNavegacao></BarraNavegacao>
      <Titulo titulo={"COMUNICADOS"}></Titulo>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="tituloSecaoConteudo">DIOCESE</h1>
        <ul className="listaConteudo">
          {constroiCards(comunicados, "comunicados", "Comunicados")}
        </ul>

        <Paginacao
          limitePorPag={2}
          totalItens={totalComunicados}
          deslocamento={deslocamentoDiocese}
          setDeslocamento={setDeslocamentoDiocese}
        ></Paginacao>

        <h1 className="tituloSecaoConteudo">ATOS DO GOVERNO</h1>
        <ul className="listaConteudo" id="atosGoverno">
          {constroiCards(noticiasVisiveis, "atosDoGoverno", "AtosGoverno")}
        </ul>
        <Paginacao
          limitePorPag={3}
          totalItens={totalAtosGov}
          deslocamento={deslocamentoAtosGov}
          setDeslocamento={setDeslocamentoAtoGov}
        ></Paginacao>
      </div>
      <Rodape></Rodape>
    </Container>
  );
}
export default Comunicados;
