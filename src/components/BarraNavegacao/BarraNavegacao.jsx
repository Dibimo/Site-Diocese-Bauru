import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./estilo.css"


const BarraNavegacao = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div id="barraNavegacao" style={{backgroundColor: "darkred"}}>
            <div className="navbar-dark  rounded d-flex flex-column">
                <div className="p-2">
                    <Navbar className=" rounded" light expand="row">
                    <Link to="/"><Col><NavbarBrand className="d-flex flex-row float-left">HOME</NavbarBrand></Col></Link>
                    <Link to="/administracao"><Col><NavbarBrand className="d-flex flex-row float-left">ADMINISTRAÇÃO</NavbarBrand></Col></Link>
                    <Link to="/paroquias"><Col><NavbarBrand href="/paroquia" className="d-flex flex-row float-left">PARÓQUIAS</NavbarBrand></Col></Link>
                    <Link to="/contato"><Col><NavbarBrand className="d-flex flex-row float-left">CONTATO</NavbarBrand></Col></Link>
                    <Col><NavItem href="/" className="d-flex flex-row float-rigth"><input type="text" placeholder="Pesquisar..."></input></NavItem></Col>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link to="/congregacoes_religiosas" className="semDecoracao"><h4>CONGREGAÇÕES RELIGIOSAS</h4></Link>
                            </NavItem>

                            <NavItem>
                                <Link to="/noticias" className="semDecoracao"><h4>VOZ DO PASTOR</h4></Link>
                            </NavItem>

                            <NavItem>
                              <Link to="/movimentos" className="semDecoracao"><h4>PASTORAIS E MOVIMENTOS</h4></Link>
                            </NavItem>

                            <NavItem>
                              <Link to="/clero" className="semDecoracao"><h4>PADRES DA DIOCESE DE BAURU</h4></Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    );
}

export default BarraNavegacao;  