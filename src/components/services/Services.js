import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ServicesIllustration from '../../assets/images/services_illustration.svg';
import MainContainer from '../../util/MainContainer';
import Typography from '../../util/Typography';
import ServicesCircle from './ServicesCircle/ServicesCircle';
import GameHub from './GameHub/GameHub';
import IntroVideo from './IntroVideo/IntroVideo';

const Services = () => {
    return (
        <React.Fragment>
            <MainContainer>
                <Typography.HeadingExtraBold classes={['text-center']}>A place that makes conversations as memorable as the matches.</Typography.HeadingExtraBold>
                <Container>
                    <Row className="d-lg-flex align-items-center">
                        <Col xs={12} lg={6}>
                            <Image src={ServicesIllustration} className="illustration d-block mx-auto" />
                        </Col>
                        <Col xs={12} lg={6}>
                            <ServicesCircle />
                        </Col>
                    </Row>
                    <Row>
                        <GameHub />
                    </Row>
                    <Row className='my-3 my-md-5'>
                        <IntroVideo />
                    </Row>
                </Container>
            </MainContainer>
        </React.Fragment>
    );
};

export default Services;