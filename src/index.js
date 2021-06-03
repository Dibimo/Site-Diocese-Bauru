import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Administracao from './pages/Administracao/Administracao';
import Contato from './pages/Contato/Contato';
import Paroquia from './pages/Paroquias/Paroquias';
import Programacao from './pages/Programacao/Programacao';
import CongregacoesReligiosas from "./pages/CongregacoesReligiosas/CongregacoesReligiosas";
import Clero from "./pages/Clero/Clero";



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/Administracao" component={Administracao} />
      <Route path="/contato" component={Contato} />
      <Route path="/paroquias" component={Paroquia} />
      <Route path="/programacao" component={Programacao} />
      <Route path="/congregacoes_religiosas" component={CongregacoesReligiosas} />
      <Route path="/clero" component={Clero} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

