import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'


function Buttons(){
    return(
        <>
  <Button >Add Ingredients</Button>{' '}
  <Button >Add Recipe</Button>{' '}
    </>
    )
}

export default Buttons