import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ServicesCircle = () => {
    return (
        <React.Fragment>
            <Stack>
                <Row className="services-circle-top d-flex align-items-end p-2">
                    <Col>
                        provides an AI-guided chat platform for live sports discussions with friends
                    </Col>
                </Row>
                <Row className="services-circle-bottom p-2">
                    <Col>
                        AI-guided chat maintains the engagement level throughout the match via live predictions, real-time match updates, trivia, and more.
                    </Col>
                </Row>
            </Stack>
        </React.Fragment>
    );
};

export default ServicesCircle;