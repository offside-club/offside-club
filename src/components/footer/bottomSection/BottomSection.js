import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import OffsideBlue from '../../../assets/images/offsideblue.svg';
import twitter from '../../../assets/images/twitter.svg';
import instagram from '../../../assets/images/instagram.svg';
import linkedIn from '../../../assets/images/linkedin.svg';
import Typography from '../../../util/Typography';

const BottomSection = () => {
    return (
        <React.Fragment>
            <Container className="mt-2 mt-sm-3 mt-lg-5 mb-2 footer-bottom-container">
                <Row className="footer-bottom-row align-items-center">
                    <Col xs={12} sm={4} className="footer-bottom-col-1">
                        <Image src={OffsideBlue} className="footer-bottom-offside-logo mx-auto d-block" />
                    </Col>
                    <Col xs={12} sm={4} className="footer-bottom-col-2">
                        <Typography.HeadingBold classes={['text-center', 'fs-5']}>Kalekik Inc.</Typography.HeadingBold>
                    </Col>
                    <Col xs={12} sm={4} className="footer-bottom-col-3 d-flex justify-content-center align-items-center">
                        <a href="https://www.offside.club/">
                            <Image src={twitter} className='footer-bottom-social-icons' />
                        </a>
                        <a href="https://www.offside.club/">
                            <Image src={instagram} className='footer-bottom-social-icons' />
                        </a>
                        <a href="https://www.offside.club/">
                            <Image src={linkedIn} className='footer-bottom-social-icons' />
                        </a>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default BottomSection;