import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Administracao from './pages/Administracao/Administracao';
import Contato from './pages/Contato/Contato';



ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/Administracao" component={Administracao} />
        <Route path="/contato" component={Contato} />

      </Switch>
    </BrowserRouter>,
  document.getElementById("root")
);

