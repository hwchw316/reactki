import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, NavDropdown, Card, Row, Form, FormControl, InputGroup, Dropdown, Col, rows } from 'react-bootstrap';


function Cards() {
    return (
        <>
            <Card style={{ width: '20rem' }} >
                <img src='https://bit.ly/3vajJ3M' />
                <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                        Subtitlesadasdasdasdasd
                    </Card.Text>
                    <Row>
                        <Col sm={6}>
                            user
                         </Col>
                        <Col sm={6}>
                            Date
                        </Col>
                    </Row>

                </Card.Body>
            </Card>

        </>
    );
}
export default Cards
/// githubbb