import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, NavDropdown, Form, FormControl, Dropdown } from 'react-bootstrap';


function Ingredientsdropdown() {
    return (
        <>
        <div className = 'dropdown'>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Price
  </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Low to High</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">High to Low</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

                        <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Meat
  </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-3">All</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Beef</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Chicken</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Pork</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                        <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Fish
  </Dropdown.Toggle>

                <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Salmon</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Unagi</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Saba/Mackerel</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Others</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                        <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Noodles & Condinments
  </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Noodles</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Sauces</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Seasoning</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Paste</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        </>
    );
}
export default Ingredientsdropdown
/// githubbb