import CardDeck from "react-bootstrap/CardDeck";
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import React from 'react';

import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./services.style.css";

const Services = () => {
    return (
        <div className="pt-3 pb-3" id="services">
            <div className="services">
            <h1 className="pt-3 text-center font-details pb-3">SERVICES</h1>
            <Container>
                <CardDeck>
                    <Row className="d-flex justify-content-around">
                        <Col md={3}>
                            <Card className="focus mt-2 mb-2">
                                <Card.Body>
                                    <Card.Title className="text-center card-title">Advice and Consultation</Card.Title>
                                    <hr />
                                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3}>
                            <Card className="focus mt-2 mb-2">
                                <Card.Body>
                                    <Card.Title className="text-center card-title">Represent You in Court</Card.Title>
                                    <hr />
                                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3}>
                            <Card className="focus mt-2 mb-2">
                                <Card.Body>
                                    <Card.Title className="text-center card-title">Review Documents & Contracts</Card.Title>
                                    <hr />
                                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3}>
                            <Card className="focus mt-2 mb-2">
                                <Card.Body>
                                    <Card.Title className="text-center card-title">Draft Document & Contract</Card.Title>
                                    <hr />
                                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        
                    </Row>

                </CardDeck>
                </Container>
            </div>       
        </div>
    );
}

export default Services;
