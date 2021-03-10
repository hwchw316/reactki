import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Buttons from './components/Button'
import Hero from './components/Hero'
import Ingreditentsdropdown from './components/Ingredientsdropdown'
import Recipesform from './recipe_form'

// import Audio from './components/Audio'

/// this would be the originial index.js / homepage
ReactDOM.render(
    <div>
      <App />
      <Recipesform/>
    </div>,
  document.getElementById('root')
);
