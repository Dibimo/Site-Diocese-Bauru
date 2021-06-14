import React, { Component, useEffect, useState } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import Titulo from "./../../components/Titulo/Titulo";
import Paginacao from "./../../components/Paginacao/Paginacao";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import conversandoComBispo from './../../data/conversandoComBispo.json';
import noticias from './../../data/noticias.json'
import "./estilo.css";

function Noticias() {
    const [deslocamentoBispo,setDeslocamentoBispo] = useState(0);
    const [deslocamentoNoticias, setDeslocamentoNoticias] = useState(0);


    const totalConversandoBispo = conversandoComBispo.length; //total de posts
    const totalNoticias = noticias.length; //total de noticias

    const [conversandoBispo,setConversandoBispo] = useState([]);
    const [noticiasVisiveis, setNoticiasVisiveis] = useState([]);

    useEffect(()=>{
      let vetor = [conversandoComBispo[deslocamentoBispo]];
      if((deslocamentoBispo+1)<totalConversandoBispo){
        vetor.push(conversandoComBispo[deslocamentoBispo+1]);
      }
      setConversandoBispo(vetor);
      
    },[deslocamentoBispo]);

    useEffect(()=>{
      let vetor = [noticias[deslocamentoNoticias]];
      if((deslocamentoNoticias + 1)<totalNoticias){
        vetor.push(noticias[deslocamentoNoticias + 1]);
      }
      if((deslocamentoNoticias + 2)<totalNoticias){
        vetor.push(noticias[deslocamentoNoticias + 2]);
      }

      setNoticiasVisiveis(vetor);
      
    },[deslocamentoNoticias])

    const constroiCards = (vetor,tipo,pastaImagens)=>{
      let cards = [];
      vetor.map((item)=>{
        cards.push(
          <li className="cardConteudo">
            <Link to={{pathname: "/conteudo_expandido", conteudo: item, tipo}}>
              <img 
                className="capa"
                src={"/imagens/"+pastaImagens+"/"+item.capa}  
                alt="capa" 
              />
              <p className="tituloConteudo">
                {item.titulo}
              </p>
          
            </Link>
          </li>
        );
      });
      return(cards);
    }

    return (
      <Container style={{backgroundColor: "#F3EEE8"}} border="1px" border-radius="5px"  sm="maxWidth">
        <BarraNavegacao></BarraNavegacao>
        <Titulo titulo={"NOTÍCIAS DA SEMANA"}></Titulo>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 className="tituloSecaoConteudo">CONVERSANDO COM O BISPO</h1>
          <ul className="listaConteudo">{constroiCards(conversandoBispo,"bispo","conversandoBispo")}</ul>

          <Paginacao
            limitePorPag={2}
            totalItens={totalConversandoBispo}
            deslocamento={deslocamentoBispo}
            setDeslocamento={setDeslocamentoBispo}
          ></Paginacao>

          <h1 className="tituloSecaoConteudo">NOTÍCIAS DIOCESANAS</h1>
          <ul className="listaConteudo">{constroiCards(noticiasVisiveis,"noticias","Noticias")}</ul>
          <Paginacao
            limitePorPag={3}
            totalItens={totalNoticias}
            deslocamento={deslocamentoNoticias}
            setDeslocamento={setDeslocamentoNoticias}
          ></Paginacao>
          <h1 className="">A VOZ DO PASTOR - DOM RUBENS SEVILHA, ODC</h1>
          <iframe id="videoChamada" width="709" height="399" src="https://www.youtube.com/embed/aZCMFTGvQbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <Rodape></Rodape>
      </Container>
    );
}
export default Noticias;
