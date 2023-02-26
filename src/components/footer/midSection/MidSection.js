import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Typography from '../../../util/Typography';
import OffsideBlue from '../../../assets/images/offsideblue.svg';

const MidSection = () => {
    return (
        <React.Fragment>
            <Container className='mt-3 mt-sm-5 footer-mid-container'>
                <Image src={OffsideBlue} className="footer-mid-image" />
                <Row className="footer-mid-heading-container footer-mid-heading-top-container">
                    <Typography.HeadingExtraBold classes={['footer-mid-heading-top']}>We'd love to <br /> hear from you!!</Typography.HeadingExtraBold>
                </Row>
                <Row className="footer-mid-heading-container footer-mid-heading-bottom-container">
                    <Typography.HeadingBold classes={['footer-mid-heading-bottom']}>Curious about what we are building? <br />
                        Write to us at <span className='text-primary'>contact@offside.club</span> Or <br /> message us on WhatsApp: <span className='text-primary'>+91-8826060074</span>.
                    </Typography.HeadingBold>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default MidSection;
