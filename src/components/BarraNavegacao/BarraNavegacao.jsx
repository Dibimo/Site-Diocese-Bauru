import React, { Component } from 'react';
import "./estilo.css"
class BarraNavegacao extends Component {
    render() {
        return (
            <div>
                <nav>
                    <button>Mais</button>
                    <ul>
                        <li>Administração</li>
                        <li>Paróquias</li>
                        <li>Contato</li>
                    </ul>
                    <input type="text"></input>
                    <button>Pesquisar</button>
                </nav>
            </div>
        );
    }
}

export default BarraNavegacao;