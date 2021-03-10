import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Ingredientsdropdown from './components/Ingredientsdropdown';
import { Navbar, Nav, NavDropdown, Form, FormControl, Dropdown, Col,rows } from 'react-bootstrap';


function Ingredientsform() {
    return (
        <>
            <h1>Share your love, your wisdom <br/> and most importantly, <br/> Your Recipe ! </h1>
            <br/>
            <br/>
            < Form>
                <Form.Row controlId="formGridAddress1">
                    <Form.Group as={Col} >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="e.g. Beef Katsu Don" />

                        <Form.Label>Sub Title</Form.Label>
                        <Form.Control type="text" placeholder="e.g. Easy to Prepare !" />

                        <Form.Label>Image Url</Form.Label>
                        <Form.Control type="text" placeholder="https://bit.ly/3sXqnZo" />
                    </Form.Group>

                     <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control placeholder='e.g. Rice, Eggs, Beef' as="textarea" rows={7} />
                </Form.Group>

                </Form.Row>

    
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Recipe</Form.Label>
                    <Form.Control placeholder='Step 1 : Season the beef with salt and pepper.
                     Coat the beef with flour, beaten egg (use 1 egg), and the panko in that order.' as="textarea" rows={2} />
                      <br/>
                      <Form.Control placeholder='Step
                      2:  Heat 2-3 cups oil in a frying pan and shallow-fry the panko-coated beef until 
                      golden brown. Take out the beef and drain extra oil on a paper towel
                      ' as="textarea" rows={2} />
                         <br/>
                      <Form.Control placeholder='Step
                      3:  Fry an egg with onions and tempura sauce.
                      ' as="textarea" rows={2} />
                         <br/>
                      <Form.Control placeholder='Step
                      4: Put rice into ricebowl before added the beef in.
                      ' as="textarea" rows={2} />
                         <br/>
                      <Form.Control placeholder='Step
                      5:  Volia ! Ready to serve
                      ' as="textarea" rows={2} />

                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
        </>
    );
}
export default Ingredientsform
/// githubbb