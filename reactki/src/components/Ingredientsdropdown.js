import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, NavDropdown, Form, FormControl, InputGroup, Dropdown, Col, rows } from 'react-bootstrap';


function Ingredientsdropdown() {
    return (
        <>
            <br />
            <div className='dropdown'>
                <Form>
                    <Form.Row className="align-items-center">
                        <Col sm={2} className="my-1">
                            <Form.Label >Ingredients Sort By</Form.Label>
                            <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly >Sort By</Form.Label>
                            <Form.Control as="select" defaultValue="None">
                                <option>None</option>
                                <option>Price Low to High</option>
                                <option>Price High to Low</option>
                            </Form.Control>
                        </Col>


                        <Col sm={2} className="my-1">
                            <Form.Label >Category</Form.Label>
                            <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly >Category</Form.Label>
                            <Form.Control as="select" defaultValue="None">
                                <option>None</option>
                                <option>Meat</option>
                                <option>Fish</option>
                                <option>Daily</option>
                                <option>Fruits & Vegetables</option>
                                <option>Noodles & Condinments</option>
                            </Form.Control>
                        </Col>


                        <Col sm={2} className="my-1">
                            <Form.Label >Price</Form.Label>
                            <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly ></Form.Label>
                            <Form.Control as="select" defaultValue="None">
                                <option>None</option>
                                <option> Under $10 </option>
                                <option> $10 - $50</option>
                                <option> $50- $100</option>
                                <option> Over $100</option>
  
                            </Form.Control>
                        </Col>


                        <Col sm={3} className="my-1">
                            <Form.Label >Search </Form.Label>
                            <InputGroup>
                                <FormControl id="inlineFormInputGroupUsername" placeholder="Enter Search" />
                            </InputGroup>
                        </Col>
                        <Col sm={3} className="my-1">
                            <Form.Label ></Form.Label>
                            <InputGroup>
                                   <Button type="submit" htmlFor="inlineFormInputGroupUsername" srOnly>Go</Button>
                            </InputGroup>

                        </Col>
                    </Form.Row>
                </Form>
            </div>
        </>
    );
}
export default Ingredientsdropdown
/// githubbb