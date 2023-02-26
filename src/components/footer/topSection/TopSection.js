import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import FooterIllustration from '../../../assets/images/footer_illustration.svg';
import Typography from '../../../util/Typography';
import StoreLogos from '../../../util/StoreLogos';
import constants from '../../../util/constants';
import AppStoreLogo from '../../../assets/images/app_store_logo.svg';
import PlayStoreLogo from '../../../assets/images/play_store_logo.svg';

const TopSection = () => {
    return (
        <React.Fragment>
            <Container className="footer-top-main-container">
                <Container className="footer-top-container">
                    <Row>
                        <Col>
                            <Image src={FooterIllustration} width="100%" className="footer-top-phone-image" />
                        </Col>
                        <Col xs={8} className='m-2'>
                            <Row>
                                <h1 className='display-4 text fs-2 fw-bold m-md-2 footer-top-heading'>Get your own commentary box with friends on Offside!</h1>
                            </Row>
                            <Row className='footer-store-logo-container'>
                                <Col xs={6}>
                                    <a href={constants.appStoreURL} target="_blank" rel="noopener noreferrer">
                                        <Image src={AppStoreLogo} className="footer-store-logo app-store-logo-footer" />
                                    </a>
                                </Col>
                                <Col xs={6}>
                                    <a href={constants.playStoreURL} target="_blank" rel="noopener noreferrer">
                                        <Image src={PlayStoreLogo} className="footer-store-logo play-store-logo-footer" />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </React.Fragment>
    );
};

export default TopSection;