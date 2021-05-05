import React, { Component } from 'react';
import BarraNavegacao from './../../components/BarraNavegacao/BarraNavegacao'
import PainelRotativo from './../../components/PainelRotativo/PainelRotativo'
import "./estilo.css"
var listaImagens = [];
class Home extends Component {
  importAll(r) {
    return r.keys();
  }
  
  componentWillMount() {
    listaImagens = this.importAll(
      require.context(`./../../../public/imagens/imagensHome/`, false, /\.(png|jpe?g|svg)$/)
    );
  }
  render() {
    return (
      <div>
        <BarraNavegacao></BarraNavegacao>
        <PainelRotativo
        nomesImagens = {listaImagens}
        diretorio = {'/imagens/imagensHome/'}
        style={{ height: 396, width: 1280 }}
        ></PainelRotativo>
      </div>
    );
  }
}

export default Home;