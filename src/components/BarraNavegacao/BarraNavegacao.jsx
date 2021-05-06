import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./estilo.css"


const BarraNavegacao = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className="bg-danger">
            <div className="navbar-dark bg-danger border border-danger rounded d-flex flex-column">
                <div className="p-2">
                    <Navbar className="bg-danger rounded" light expand="row">
                    <Link to="/"><Col><NavbarBrand className="d-flex flex-row float-left">Home</NavbarBrand></Col></Link>
                    <Link to="/administracao"><Col><NavbarBrand className="d-flex flex-row float-left">Administração</NavbarBrand></Col></Link>
                    <Col><NavbarBrand href="/paroquia" className="d-flex flex-row float-left">Paróquias</NavbarBrand></Col>
                    <Col><NavbarBrand href="/contato" className="d-flex flex-row float-left">Contato</NavbarBrand></Col>
                    <Col><NavItem href="/" className="d-flex flex-row float-rigth"><input type="text" placeholder="Pesquisar..."></input></NavItem></Col>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/adm"><h4>...</h4></NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/paroquia"><h4>...</h4></NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/contato"><h4>...</h4></NavLink>
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