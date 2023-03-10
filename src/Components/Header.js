import React, { Component } from "react";
import { Button, Container, FormControl, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Form } from "react-bootstrap";
import logo from '../images/logo192.png';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';
import AboutList from '../Pages/AboutList';



export default class Header extends Component{
    render(){
        return(
            <>
            <Navbar sticky="top" collapseOnSelect="md" bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="/">
                        <img
                            src={logo}
                            height={30}
                            width={30}
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </NavbarBrand>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/contacts">Contacts</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/aboutlist">About List</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                            type="text"
                            placeholder="search"
                            className="me-sm-2"
                            />
                            <Button variant="outline-info">search</Button>
                        </Form>
                    </NavbarCollapse>
                </Container>
            </Navbar>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contacts" element={<Contacts />} />
                    <Route exact path="/blog" element={<Blog />} />
                    <Route exact path="/aboutlist" element={<AboutList />} />
                </Routes>
            </Router>
            </>
        );
    }
}