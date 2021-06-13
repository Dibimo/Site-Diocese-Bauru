import React, { Component, useEffect, useState } from "react";
import BarraNavegacao from "../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "../../components/Rodape/Rodape";
import { useLocation } from "react-router-dom";



function ConteudoExpandido() {
  const{ conteudo } = useLocation();
  const{ tipo } = useLocation();
  
  const constroiPagina = ()=>{
    let pagina;
    if(tipo === 'bispo'){
      pagina = (
        <>
          <div>
            Postado em: {conteudo.data} * {conteudo.minutosParaLer} min para ler
          </div>
          <h1>
            {conteudo.titulo}
          </h1>
          <img src={'/imagens/conversandoBispo/'+conteudo.capa} alt="" />
          <div>
            {constroiTextoConvBispo()}
          </div>
        </>
      );
    }
    if (tipo === "noticias") {
      pagina = (
        <>
          <div>
            Postado em: {conteudo.data} * {conteudo.minutosParaLer} min para ler
          </div>
          <h1>{conteudo.titulo}</h1>
          <img src={"/imagens/noticias/" + conteudo.capa} alt="" />
          <div>{constroiTextoNoticia()}</div>
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
            <p>{paragrafo.citacaoBiblica}</p>
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


  return (
    <div className="container">
      <BarraNavegacao></BarraNavegacao>
      {constroiPagina()}
      <Rodape></Rodape>
    </div>
  );
}
export default ConteudoExpandido;
