import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Toolbar.css";

const Toolbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>
                <Link className="navbar-brand" to="/">
                    Главная
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto centred">
                    <Link className="nav-link" to="/services">
                        Услуги
                    </Link>
                    <Link className="nav-link" to="/practice">
                        Практика
                    </Link>
                    <Link className="nav-link" to="/contacts">
                        Контакты
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Toolbar;
