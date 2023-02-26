import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OffsideBlue from '../../../assets/images/offsideblue.svg';

const ServicesCircle = () => {
    return (
        <React.Fragment>
            <Container className='my-3 my-lg-5'>
                <Row className="services-circle-top d-flex align-items-end p-2 mx-auto">
                    <Col className="services-circle-col services-circle-top-col">
                        <Image src={OffsideBlue} className="services-circle-top-offside-logo" />
                        provides an AI-guided chat platform for live sports discussions with friends
                    </Col>
                </Row>
                <Row className="services-circle-bottom p-2 mx-auto">
                    <Col className="services-circle-col services-circle-bottom-col">
                        AI-guided chat maintains the engagement level throughout the match via live predictions, real-time match updates, trivia, and more.
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default ServicesCircle;