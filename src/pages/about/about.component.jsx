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
               
                    <Col xs={12} >
                        <Row className="align-items-center p-2 my-details rounded">
                                <strong>Legal Assurance Kenya</strong>
                                
                                Is the first Kenyan legal insurance company which provides a specific class of insurance which is to facilitate access to law and justice by providing legal advice and covering legal cost of dispute regardless of whether the case is brought by or against the policy holder.
                                <br />
                                <br />
                                legal assurance Kenya tend to provide legal solution to Kenyans at the grass root level by facilitating  access to law and justice by providing legal advice and covering legal costs of a dispute, through this Kenyans will be able to not only know about their right but also their legal  duties as citizens .
                                <br/>
                                <br />
                                 Working with the clients, Our goal is always driven towards providing amazing experience with the best level of quality and service to them.
                                <br />
                                <br />

                                <strong>Mission</strong>
                                <br />
                                Legal assurance Kenya  gives you the ability to talk to a lawyer  on any personal legal matter without worrying about high costs. That’s why, under the protection of legal assurance Kenya , you or your family can live your lives worry free.
                                <br/>
                                <br/>
                                <br/>

                                <strong>What we Cover</strong>
                                <br />
                                Legal advice - Any time you have a legal question, about anything, you can call your lawyer to get sound legal advice. Your lawyer  will get back to you within 3 business hours and they are available 24/7 for emergency situations
                                Legal assurance Kenya  gives you the ability to talk to a lawyer  on any personal legal matter without worrying about high costs. That’s why, under the protection of legal assurance Kenya , you or your family can live your lives worry free.
                                <br/>
                                <br />
                                Drafting of legal document - our lawyer  is available to draft and scrutinize legal document for you.
                                <br />
                                <br />
                                Representation in court-If you’ve ever wanted to say to someone “speak to my lawyer,” now you can. Your Provider lawyer is available to write letters or make phone calls on your behalf. They can even defend you in court for no additional fee. 

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
               
            </Container>
            </div>
        </div>
    )
}

export default About; 
