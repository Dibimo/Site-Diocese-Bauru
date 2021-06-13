import React, { Component, useEffect, useState } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import Titulo from "./../../components/Titulo/Titulo";
import Paginacao from "./../../components/Paginacao/Paginacao";
import { Link } from "react-router-dom";
import conversandoComBispo from './../../data/conversandoComBispo.json';
import noticias from './../../data/noticias.json'
import "./estilo.css";

function Noticias() {
    const [deslocamentoBispo,setDeslocamentoBispo] = useState(0);
    const [deslocamentoNoticias, setDeslocamentoNoticias] = useState(0);


    const totalConversandoBispo = conversandoComBispo.length; //total de notícias
    const totalNoticias = noticias.length;
    const [conversandoBispo,setConversandoBispo] = useState([]);
    
    useEffect(()=>{
      let vetor = [conversandoComBispo[deslocamentoBispo]];
      if((deslocamentoBispo+1)<totalConversandoBispo){
        vetor.push(conversandoComBispo[deslocamentoBispo+1]);
      }
      setConversandoBispo(vetor);
      
    },[deslocamentoBispo]);

    const constroiConversandoBispo = ()=>{
      let cards = [];
      conversandoBispo.map((conversando)=>{
        cards.push(
          <li className="cardConteudo">
            <Link to={{pathname: "/conteudo_expandido", conteudo: conversando, tipo: "bispo"}}>
              <img 
                className="capa"
                src={"/imagens/conversandoBispo/"+conversando.capa}  
                alt="capa" 
              />
              <p className="tituloConteudo">
                {conversando.titulo}
              </p>
          
            </Link>
          </li>
        );
      });
      return(cards);
    }

    

    return (
      <div className="container">
        <BarraNavegacao></BarraNavegacao>
        <Titulo titulo={"Notícias da Semana"}></Titulo>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Conversando com o Bispo</h1>
          <ul className="listaConteudo">{constroiConversandoBispo()}</ul>

          <Paginacao
            limitePorPag={2}
            totalItens={totalConversandoBispo}
            deslocamento={deslocamentoBispo}
            setDeslocamento={setDeslocamentoBispo}
          ></Paginacao>

          <h1>Notícias Diocesanas</h1>
          <ul className="listaConteudo"></ul>
          <Paginacao
            limitePorPag={2}
            totalItens={totalNoticias}
            deslocamento={deslocamentoNoticias}
            setDeslocamento={setDeslocamentoNoticias}
          ></Paginacao>
        </div>
        <Rodape></Rodape>
      </div>
    );
}
export default Noticias;
