import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, NavDropdown, Form, FormControl, InputGroup, Dropdown, Col, rows } from 'react-bootstrap';


function Recipedropdown() {
    return (
        <>
            <br />
            <div className='dropdown'>
                <Form>
                    <Form.Row className="align-items-center">
                        <Col sm={3} className="my-1">
                            <Form.Label >Recipe Sort By</Form.Label>
                            <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly >Sort By</Form.Label>
                            <Form.Control as="select" defaultValue="None">
                                <option>None</option>
                                <option>Most Comments</option>
                                <option>Highest Rating</option>
                                <option>Newest to Oldest</option>
                                <option>Oldest to Newest</option>
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
export default Recipedropdown
/// githubbb