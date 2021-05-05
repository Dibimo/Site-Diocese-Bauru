import React, { Component } from 'react';
import BarraNavegacao from './../../components/BarraNavegacao/BarraNavegacao'
import PainelRotativo from './../../components/PainelRotativo/PainelRotativo'
import Rodape from './../../components/Rodape/Rodape'
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
      <div>
        <BarraNavegacao></BarraNavegacao>
        
        <PainelRotativo
        nomesImagens = {listaImagens}
        diretorio = {'/imagens/Home/painel/'}
        style={{ height: 396, width: 1280 }}
        ></PainelRotativo>
        <div style={{marginTop: "40px"}}>
          <button>Programação</button>
          <button>Movimentos</button>
          <button>Seminários</button>
        </div>
        <div>
          <h4>Acontece na diocese</h4>
          <div style={{border: "1px solid", display: "inline-block", margin: "2px"}}>
            <img src="/imagens/Home/aconteceDiocese/Comunicados.jpg" alt="Imagem Comunicados"/>
            <p>Comunicados</p>
          </div>
          <div style={{border: "1px solid", display: "inline-block", margin: "2px"}}>
            <img src="/imagens/Home/aconteceDiocese/Noticias.png" alt="Imagem Noticias"/>
            <p>Noticias</p>
          </div>
          <div style={{border: "1px solid", display: "inline-block", margin: "2px"}}>
            <img src="/imagens/Home/aconteceDiocese/Bispos e padres.jpg" alt="Imagem Bispos e Padres"/>
            <p>Bispos e Padres</p>
          </div>
        </div>
        <div>
          <h4>Siga-nos em nossas redes sociais</h4>
          <img src="/imagens/Home/redesSociais/logoYouTube.png" alt="logo YouTube"/>
          <img src="/imagens/Home/redesSociais/logoFacebook.png" alt="logo Facebook"/>
          <img src="/imagens/Home/redesSociais/logoInstagram.png" alt="logo Instagram"/>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.367780221864!2d-49.07951328442846!3d-22.339737823500133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf6703e95f3977%3A0x99358b5e43d92e68!2sDiocese%20de%20Bauru%20-%20C%C3%BAria%20Diocesana!5e0!3m2!1spt-BR!2sbr!4v1619972127201!5m2!1spt-BR!2sbr" style={{width: "500px", height: "500px", border:0}} allowfullscreen="" loading="lazy" class="map"></iframe>
        <Rodape></Rodape>
      </div>
    );
  }
}

export default Home;