import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Buttons from './components/Button'
import Hero from './components/Hero'
import Ingredientsdropdown from './components/Ingredientsdropdown';
import Ingredientsform from './ingredients_form_page'
import { Navbar, Nav, NavDropdown, Form, FormControl, Dropdown } from 'react-bootstrap';
// import Audio from './components/Audio'
// testing page

ReactDOM.render(
    <div>
      <App />
      <Ingredientsdropdown/>
      <Ingredientsform/>
    </div>,



  document.getElementById('root')
);
