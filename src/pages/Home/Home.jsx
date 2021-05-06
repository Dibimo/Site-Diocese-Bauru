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
      <div className="container">
        <BarraNavegacao></BarraNavegacao>
        
        <PainelRotativo
        nomesImagens = {listaImagens}
        diretorio = {'/imagens/Home/painel/'}
        style={{ height: 396, width: 1280 }}
        ></PainelRotativo>
        <br></br>
        <div className="tintura2 round">

          <br></br>
          <div  align="center" padding="2px" style={{marginTop: "40px"}}>
            <button width="200px" height="80px">Programação</button>
            <button>Movimentos</button>
            <button type="submit"><i class="fas fa-church"></i>Seminários</button>
          </div>

          <br></br>

          <div>

            <div class="titulo">
              <h2><span className="tintura2">
                Acontece na Diocese
              </span></h2>
            </div>          
            <br></br><br></br>
            <div alignitems="center" class="row">

              <div className="col-md-4 padding">
                <div className="card h-30">
                  <form>
                    <div className="card-body">
                      <img src="/imagens/Home/aconteceDiocese/Comunicados.jpg" width="100%" height="300px" alt="..." />
                    </div>
                    <div align="center" className="card-footer bg-danger"><h4>COMUNICADOS</h4></div>
                  </form>
                </div>
              </div>

              <div className="col-md-4 padding">
                <div className="card h-30">
                  <form>
                    <div className="card-body">
                      <img src="/imagens/Home/aconteceDiocese/Noticias.png" width="100%" height="300px" alt="..." />
                    </div>
                    <div align="center" className="card-footer bg-danger"><h4>NOTÍCIAS</h4></div>
                  </form>
                </div>
              </div>

              <div className="col-md-4 padding">
                <div className="card">
                  <form>
                    <div className="card-body">
                      <a href="/"><img src="/imagens/Home/aconteceDiocese/Bispos e padres.jpg" width="100%" height="300px" alt="..." /></a>
                    </div>
                    <div align="center" className="card-footer bg-danger"><h4>CLERO</h4></div>
                  </form>
                </div>
              </div>
            </div>
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
      </div>
    );
  }
}

export default Home;