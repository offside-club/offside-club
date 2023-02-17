import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeScreenIllustration from '../../assets/images/home_screen_illustration.svg';
import AppStoreLogo from '../../assets/images/app_store_logo.svg';
import PlayStoreLogo from '../../assets/images/play_store_logo.svg';
import Image from 'react-bootstrap/Image';
import MainContainer from '../../util/MainContainer';
import Typography from '../../util/Typography';

const HomeSection = () => {
    return (
        <React.Fragment>
            <MainContainer>
                <Row className='mb-md-5 pb-md-5'>
                    <Col>
                        <Row className='pt-md-5'>
                            <Typography.HeadingExtraBold>Can't Wait to Talk About the Match?</Typography.HeadingExtraBold>
                            <Typography.HeadingExtraBold classes={['text-primary']}>Meet Your Friends on Offside!</Typography.HeadingExtraBold>
                        </Row>
                        <Row className='mt-4 pt-md-5 store-logos-home'>
                            <h6 className='text-white'>Download the Offside app</h6>
                            <Row>
                                <Col xs={6} sm={4} md={6} lg={5}>
                                    <a href="https://apps.apple.com/in/app/offsideclub/id6444310420" target="_blank" rel="noopener noreferrer">
                                        <Image src={AppStoreLogo} className="app-store-logo-home" />
                                    </a>
                                </Col>
                                <Col xs={6} sm={8} md={6} lg={7}>
                                    <a href="https://play.google.com/store/apps/details?id=com.offsideclub" target="_blank" rel="noopener noreferrer">
                                        <Image src={PlayStoreLogo} className="play-store-logo-home" />
                                    </a>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                    <Col className='d-flex justify-content-center' xs={12} md={7}>
                        <Image src={HomeScreenIllustration} className="illustration" />
                    </Col>
                </Row>
            </MainContainer>
        </React.Fragment>
    );
};

export default HomeSection;