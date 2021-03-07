import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';


function Navibar() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Donki</Navbar.Brand>
                <img
                    src="/images/icon3.png"

                    width="30"
                    height = "30"
                    padding = "20px 10px"
                    className="d-inline-block align-top"
                />
                <Nav className="mr-auto">
                    <Nav.Link ></Nav.Link>
                    <Nav.Link ></Nav.Link>
                    <Nav.Link ></Nav.Link>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#recipes">Recipes</Nav.Link>
                    <Nav.Link href="#ingredients">Ingredients</Nav.Link>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}
export default Navibar
/// githubbb