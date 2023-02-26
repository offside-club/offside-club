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
            <Container className="my-5 top-section">
                <Row>
                    <Col>
                        <Image src={FooterIllustration} width="100%" className="footer-phone-image" />
                    </Col>
                    <Col>
                        <Row>
                            <Typography.HeadingBold>Get your own commentary box with friends on Offside!</Typography.HeadingBold>
                        </Row>
                        <Row className='d-flex justify-content-end'>
                            <Col xs={12} md={6}>
                                <a href={constants.appStoreURL} target="_blank" rel="noopener noreferrer">
                                    <Image src={AppStoreLogo} className="app-store-logo-home" />
                                </a>
                            </Col>
                            <Col xs={12} md={6}>
                                <a href={constants.playStoreURL} target="_blank" rel="noopener noreferrer">
                                    <Image src={PlayStoreLogo} className="play-store-logo-home" />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default TopSection;