import React, { Component } from 'react';
import BarraNavegacao from './../../components/BarraNavegacao/BarraNavegacao'
import "./estilo.css"
class Home extends Component {
    render() {
        return (
            <div>
                <BarraNavegacao></BarraNavegacao>
            </div>
        );
    }
}

export default Home;