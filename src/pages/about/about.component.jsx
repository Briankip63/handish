import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import law8 from "../../assets/img/law8.jpg";
import "./about.style.css";


const About  = () => {
    return (
        <div id="about">
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT US</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                        <Image className="image justify-content-end" alt="image" src={law8} thumbnail fluid />
                        </Row>
                    </Col>

                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                                <strong>Legal Assuarance Kenya</strong>
                                
                                Is the first Kenya legal insurance company which provides a specific class of insurance which is to facilitate access to law and justice by providing legal advice and covering legal cost of dispute regardless of whether the case is brought by or against the policy holder.
                                <br />
                                <br/>
                                 Working with the clients, Our goal is always driven towards providing amazing experience with the best level of quality and service to them.
                                <br />
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                <a href="#contact">
                                <Button className="m-2" variant="outline-dark">
                                Let's talk
                                </Button>
                                </a>
                                </div>
                
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default About; 
