import React, { Component, useEffect, useState } from "react";
import BarraNavegacao from "../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "../../components/Rodape/Rodape";
import { useLocation } from "react-router-dom";
import Container from "@material-ui/core/Container";

import './estilo.css';

function ConteudoExpandido() {
  const{ conteudo } = useLocation();
  const{ tipo } = useLocation();
  
  const constroiPagina = ()=>{
    let pagina;
    if(tipo === 'bispo'){
      pagina = (
        <>
          <div style={{ marginTop: "1%" }}>
            Postado em: {conteudo.data} • {conteudo.minutosParaLer} min para ler
          </div>
          <h1 className="tituloExpandido">{conteudo.titulo}</h1>
          <div className="capaExpandida">
            <img src={"/imagens/conversandoBispo/" + conteudo.capa} alt="" />
          </div>
          <div className="conteinerTexto">{constroiTextoConvBispo()}</div>
        </>
      );
    }
    if (tipo === "noticias") {
      pagina = (
        <>
          <div>
            Postado em: {conteudo.data} • {conteudo.minutosParaLer} min para ler
          </div>
          <h1 className="tituloExpandido">{conteudo.titulo}</h1>
          <div className="capaExpandida">
            <img src={"/imagens/noticias/" + conteudo.capa} alt="" />
          </div>
          <div className="conteinerTexto">{constroiTextoNoticia()}</div>
        </>
      );
    }
    if(tipo === "atosDoGoverno"){
      pagina = (
        <>
          <h1 className="tituloExpandido">{conteudo.titulo}</h1>
          <div className="capaExpandida">
            <img src={"/imagens/AtosGoverno/" + conteudo.capa} alt={conteudo.capa} />
          </div>
          <div className="conteinerTexto">{constroiTextoAtoGov()}</div>
          <div id="assinaturaAtoGov">
            <p>{conteudo.data}</p>
            <p>{conteudo.assinatura}</p>
            <p>{conteudo.funcao}</p>
          </div>
        </>
      );
    }
    if(tipo === 'comunicados'){
      pagina = (
        <>
          <h1 className="tituloExpandido">{conteudo.titulo}</h1>
          <div className="capaExpandida">
            <img src={"/imagens/Comunicados/" + conteudo.capa} alt={conteudo.capa} />
          </div>
        </>
      );
    }
    return pagina;
  }

  const constroiTextoConvBispo = ()=>{
    let textoConstruido = [];
    conteudo.conteudo.map((paragrafo)=>{
        textoConstruido.push(
          <>
            <p className="citacaoBiblica">{paragrafo.citacaoBiblica}</p>
            <p>{paragrafo.texto}</p>
          </>
        );
    });
    return textoConstruido;
  }

  const constroiTextoNoticia = ()=>{
    let textoConstruido = [];
    conteudo.texto.map((paragrafo)=>{
      textoConstruido.push(
        <p>{paragrafo}</p>
      );
    });
    return textoConstruido;
  }

  const constroiTextoAtoGov = ()=>{
    let textoConstruido = [];
    conteudo.texto.map((paragrafo)=>{
      textoConstruido.push(
        <p style={{fontWeight: "bold"}}>{paragrafo}</p>
      );
    });
    return textoConstruido;
  }


  return (
    <Container style={{backgroundColor: "#F3EEE8"}} border="1px" border-radius="5px"  sm="maxWidth">
      <BarraNavegacao></BarraNavegacao>
      {constroiPagina()}
      <Rodape></Rodape>
    </Container>
  );
}
export default ConteudoExpandido;
