import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '../../../util/Typography';
import OffsideBlue from '../../../assets/images/offsideblue.svg';

const MidSection = () => {
    return (
        <React.Fragment>
            <Container style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/offsideblue.svg"})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '25vh'
            }}>
                <Row>
                    <Typography.HeadingExtraBold>We'd love to hear from you!!</Typography.HeadingExtraBold>
                </Row>
                <Row>
                    <Typography.HeadingBold styles={{
                        fontSize: '1rem!important'
                    }}>Curious about what we are building?
                        Write to us at contact@offside.club Or message us on WhatsApp: +91-8826060074.
                    </Typography.HeadingBold>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default MidSection;
