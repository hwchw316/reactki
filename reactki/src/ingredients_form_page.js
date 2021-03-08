import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Ingredientsdropdown from './components/Ingredientsdropdown';
import { Navbar, Nav, NavDropdown, Form, FormControl, Dropdown, Col,rows } from 'react-bootstrap';


function Ingredientsform() {
    return (
        <>
            < Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="e.g. Beef Katsu Don" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Sub Title</Form.Label>
                        <Form.Control type="text" placeholder="e.g. Easy to Prepare !" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ingredients</Form.Label>>
                    <Form.Control placeholder='e.g. Rice, Eggs, Beef' as="textarea" rows={5} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Recipe</Form.Label>
                    <Form.Control placeholder='e.g. 1)  Season the beef with salt and pepper. Coat the beef with flour, beaten egg (use 1 egg), and the panko in that order. 2)  Heat 2-3 cups oil in a frying pan and shallow-fry the panko-coated beef until golden brown. Take out the beef and drain extra oil on a paper towel' as="textarea" rows={5} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
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