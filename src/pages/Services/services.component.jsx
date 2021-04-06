import CardDeck from "react-bootstrap/CardDeck";
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import React from 'react';

import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import employment from "../../assets/img/employment.jpg";
import education from "../../assets/img/education.jpg";
import car from "../../assets/img/car.jpg";
import injury from "../../assets/img/injury.jpg";
import reputation from "../../assets/img/reputation.jpg";
import homes from "../../assets/img/homes.jpg";


import "./services.style.css";

const Services = () => {
    return (
        <div className="pt-3 pb-3" id="services">
            <div className="services">
            <h1 className="pt-3 text-center font-details pb-3">SERVICES</h1>
            <Container>
                <CardDeck>
                    <Row className="d-flex justify-content-around">
                        <Col md={4}>
                            <Card className="focus mt-2 mb-2">
                                <Card.Body>
                                    <Card.Title className="text-center card-title">Motor Vehicle Issues</Card.Title>
                                    <hr />
                                    <Image className="image justify-content-end" alt="image" src={car} thumbnail fluid />
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

                        <Col md={4}>
                            <Card className="focus mt-2 mb-2">
                                <Card.Body>
                                    <Card.Title className="text-center card-title">Education Matters</Card.Title>
                                    <hr />
                                    <Image className="image justify-content-end" alt="image" src={education} thumbnail fluid />
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

                        <Col md={4}>
                            <Card className="focus mt-2 mb-2">
                                <Card.Body>
                                    <Card.Title className="text-center card-title">Employment</Card.Title>
                                    <hr />
                                    <Image className="image justify-content-end" alt="image" src={employment} thumbnail fluid />
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

                        <Col md={4}>
                            <Card className="focus mt-2 mb-2">
                                <Card.Body>
                                    <Card.Title className="text-center card-title">Home and Accomodation</Card.Title>
                                    <hr />
                                    <Image className="image justify-content-end" alt="image" src={homes} thumbnail fluid />
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

                        <Col md={4}>
                            <Card className="focus mt-2 mb-2">
                                <Card.Body>
                                    <Card.Title className="text-center card-title">Personal Injury</Card.Title>
                                    <hr />
                                    <Image className="image justify-content-end" alt="image" src={injury} thumbnail fluid />
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

                        <Col md={4}>
                            <Card className="focus mt-2 mb-2">
                                <Card.Body>
                                    <Card.Title className="text-center card-title">Reputational Issues</Card.Title>
                                    <hr />
                                    <Image className="image justify-content-end" alt="image" src={reputation} thumbnail fluid />
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
