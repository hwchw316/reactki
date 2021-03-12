import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Buttons from './components/Button'
import Hero from './components/Hero'
import Recipesform from './recipe_form'
import Ingredientsform from './ingredients_form'
import Ingredientsdropdown from './components/Ingredientsdropdown';
import Recipedropdown from './components/Recipedropdown';
import Cards from './components/Cards';
import { Navbar, Nav, NavDropdown, Card,Row, Form, FormControl, InputGroup, Dropdown, Col, rows } from 'react-bootstrap';


// import Audio from './components/Audio'

/// this would be the originial index.js / homepage
ReactDOM.render(
    <div>
      <App />
      <Recipedropdown/>
      <Ingredientsdropdown/>
      <Row>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>

          <Cards/><Cards/>
          <Cards/>
          <Cards/>

          <Cards/>
    </Row>

      
    </div>,



  document.getElementById('root')
);
