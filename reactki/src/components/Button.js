import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'


function Buttons(){
    return(
        <>
  <Button variant="outline-primary">Add Ingredients</Button>{' '}
  <Button variant="outline-primary">Add Recipe</Button>{' '}
    </>
    )
}

export default Buttons