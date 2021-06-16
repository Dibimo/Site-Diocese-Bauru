import React, { Component, useEffect, useState } from "react";
import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";
import Rodape from "./../../components/Rodape/Rodape";
import Titulo from "./../../components/Titulo/Titulo";
import Container from "@material-ui/core/Container";
import "./estilo.css";

function Seminarios() {
  
  return (
    <Container
      style={{ backgroundColor: "#F3EEE8" }}
      border="1px"
      border-radius="5px"
      sm="maxWidth"
    >
      <BarraNavegacao></BarraNavegacao>
      <Titulo titulo={"SEMINÁRIOS"}></Titulo>
      <div className="conteinerSeminario">
        <div className="tituloSeminario">
          <img src="/imagens/Programacao/iconeInformacoes.png" alt="icone" />
          <h3>SEMINÁRIO DIOCESANO MARIA MÃE DA IGREJA (PROPEDÊUTICO)</h3>
        </div>
        <p className="paragrafoSeminario">RUA EMÍLIO VIEGAS, 6-37, SENTA LUZIA, BAURU - SP - CEP 17025-350</p>
        <p className="paragrafoSeminario">REITOR: PADRE MARCIO JOSÉ CATACHE</p>
        <p className="paragrafoSeminario">DIRETOR ESPIRITUAL: PADRE ANDERSON LUÍS MOREIRA</p>
        <p className="paragrafoSeminario">FORMADOR: PADRE PAULO TAVARES DE BRITO | FONE: (14) 3202-9323</p>
      </div>

      <div className="conteinerSeminario">
        <div className="tituloSeminario">
          <img src="/imagens/Programacao/iconeInformacoes.png" alt="icone" />
          <h3>SEMINÁRIO DIOCESANO SÃO JOSÉ</h3>
        </div>
        <p className="paragrafoSeminario">RUA ALMIRANTE BARROSO, 160, PALMITAL, MARÍLIA - SP - CEP 17500-970</p>
        <p className="paragrafoSeminario">REITOR: PADRE MARICO JOSÉ CATACHE</p>
      </div>

      <div className="conteinerCursos">
        <div className="curso">
          <h3>FILOSOFIA</h3>
          <h6>1 º ANO</h6>
          <p id="paragrafoEspecial">PAULO GABRIEL FUKASSI SOARES - 27/12/1998</p>
          
          <h6>2 º ANO</h6>
          <p>RICARDO BOARO SOARES - 01/08/1995</p>
          <p>ROGER CARVALHO DA SILVA - 05/03/1993</p>
          
          <h6>3 º ANO</h6>
          <p>GABRIEL HENRIQUE FANTINATI - 05/05/1995</p>
          <p>LUIZ RODRIGO BELLINASI - 11/04/1985</p>
        </div>
        <div className="curso">
          <h3>TEOLOGIA</h3>
          <h6>2 º ANO</h6>
          <p>RAUL MELGES DOS SANTOS - 07/06/1996</p>
          <p>FELIPE GOMES FERREIRA - 24/08/1993</p>
          
          <h6>3 º ANO</h6>
          <p>HERALDO LUIZ FELÍCIO - 05/07/1977</p>
          <p>RODRIGO DE PAULA - 26/03/1995</p>
          
          <h6>4 º ANO</h6>
          <p>MURILO KELER BERNARDES - 22/02/1989</p>
          <p>THIAGO DE FREITAS ALBERTINI - 06/12/1990</p>
        </div>
      </div>

      <h2 id="equipeFormacao">EQUIPE DIOCESANA DE FORMAÇÃO</h2>
      <div className="bispoDiocesano">
          <h6>BISPO DIOCESANO:</h6>
          <p>DOM RUBENS SEVILHA, OCD</p>
      </div>
      <div className="conteinerEquipeFormacao">
        <div className="conteinerCargos">
          <h6>REITOR:</h6>
          <p>PADRE MARCIO JOSÉ CATACHE</p>
        </div>

        <div className="conteinerCargos">
          <h6>VICE REITOR:</h6>
          <p>PADRE LUÍS ANTONIO CARQUEIJO SÉ</p>
        </div>

        <div className="conteinerCargos">
          <h6>FORMADOR:</h6>
          <p>PADRE PAULO TAVARES DE BRITO</p>
        </div>

        <div className="conteinerCargos">
          <h6>DIRETORES ESPIRITUAIS:</h6>
          <p>PADRE ADINAM RONIERE DA SILVA</p>
          <p>PADRE ANDERSON LUÍS MOREIRA</p>
          <p>PADRE LEONILDO MINUTTI JUNIOR</p>
        </div>

      </div>
      <Rodape></Rodape>
    </Container>
  );
}
export default Seminarios;
