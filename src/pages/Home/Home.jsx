import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarraNavegacao from './../../components/BarraNavegacao/BarraNavegacao'
import PainelRotativo from './../../components/PainelRotativo/PainelRotativo'
import Rodape from './../../components/Rodape/Rodape'
import Card from "./Card";
import {Grid} from "@material-ui/core";
import Container from '@material-ui/core/Container';
import "./estilo.css"



var listaImagens = [];
class Home extends Component {
  importAll(r) {
    return r.keys();
  }
  
  componentWillMount() {
    listaImagens = this.importAll(
      require.context(`./../../../public/imagens/Home/painel/`, false, /\.(png|jpe?g|svg)$/)
    );
  }
  render() {
    return (
      <Container style={{backgroundColor: "#F3EEE8"}} border="1px" border-radius="5px"  sm="maxWidth">
        <BarraNavegacao></BarraNavegacao>
        
        <PainelRotativo
        nomesImagens = {listaImagens}
        diretorio = {'/imagens/Home/painel/'}
        style={{ height: 396, width: 1280 }}
        ></PainelRotativo>
        <br></br>
        <div className="tintura2 round">

          <br></br>
          <div  align="center" padding="2px" style={{marginTop: "40px", marginBottom: "20px"}}>
            <Link to="/programacao"><button id="botaoProgramacao"></button></Link>
            <button id="botaoMovimentos"></button>
            <button id="botaoSeminarios" type="submit"><i class="fas fa-church"></i></button>
          </div>

          <br></br>

          <div>

            <div class="titulo">
              <h2><span className="tintura2">
                Acontece na Diocese
              </span></h2>
            </div>          
            <br></br><br></br>
            
            <Grid container 
                spacing={4}
                direction="row"
                justify="center"
                alignItems="center"
              >
              <Grid align="center" item xs={12} sm={6} md={4}>
                <Card titulo="Comunicados" />
              </Grid> 
              <Grid align="center" item xs={12} sm={6} md={4}>
                <Card titulo="Notícias" />
              </Grid>   
              <Grid align="center" item xs={12} sm={6} md={4}>
                <Link to="/clero"> <Card titulo="Clero" /></Link>
              </Grid>
            </Grid>

            <br></br>
          </div>

          <div align="center">
            <h2>Siga-nos em nossas redes sociais</h2>            
            <a href="https://www.youtube.com/channel/UCc2KgNkAbybFDV-JBAKqxLg/featured" target="_blank" rel="noreferrer"><img src="/imagens/Home/redesSociais/logoYouTube.png" alt="logo YouTube"/></a>
            <a href="https://www.facebook.com/diocesedebauru/" target="_blank" rel="noreferrer"><img src="/imagens/Home/redesSociais/logoFacebook.png" alt="logo Facebook"/></a>
            <a href="https://www.instagram.com/diocesedebauru/" target="_blank" rel="noreferrer"><img src="/imagens/Home/redesSociais/logoInstagram.png" alt="logo Instagram"/></a>
          </div>
          <br></br>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.367780221864!2d-49.07951328442846!3d-22.339737823500133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf6703e95f3977%3A0x99358b5e43d92e68!2sDiocese%20de%20Bauru%20-%20C%C3%BAria%20Diocesana!5e0!3m2!1spt-BR!2sbr!4v1619972127201!5m2!1spt-BR!2sbr" style={{width: "100%", height: "500px", border:0}} allowfullscreen="" loading="lazy" class="map"></iframe>

        <Rodape></Rodape>
      </Container>  
    );
  }
}

export default Home;