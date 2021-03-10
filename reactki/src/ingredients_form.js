import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Ingredientsdropdown from './components/Ingredientsdropdown';
import { Navbar, Nav, NavDropdown, Form, FormControl, Dropdown, Col, rows } from 'react-bootstrap';


function Ingredientsform() {
    return (
        <>
            <h1>Found something that is <br /> not here ? <br /> Add to it ! </h1>
            <br />
            <br />
            < Form>
                <Form.Row controlId="formGridAddress1">
                    <Form.Group as={Col} >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="e.g. Beef Katsu Don" />
            
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="e.g. Easy to Prepare !" />

                        <Form.Label>Image Url</Form.Label>
                        <Form.Control type="text" placeholder="https://bit.ly/3sXqnZo" />

                        <Form.Group  controlId="formGridState">
                            <Form.Label>Ingredients Category</Form.Label>
                            <Form.Control as="select" >
                                <option>Meat</option>
                                <option>Fish</option>
                                <option>Daily</option>
                                <option>Fruits & Vegetables</option>
                                <option>Noodles & Condiments</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Group>

                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Image Preview</Form.Label>
                        <Form.Control placeholder='e.g. Rice, Eggs, Beef' as="textarea" rows={10} />
                    </Form.Group>

                </Form.Row>
                <Button variant="primary" type="submit">
                    Submit
  </Button>

                <Button variant="primary" type="back">
                    Back to Homepage
  </Button>
            </Form>
        </>
    );
}
export default Ingredientsform
/// githubbb