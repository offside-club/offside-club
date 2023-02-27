import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeScreenIllustration from '../../assets/images/home_screen_illustration.svg';
import Image from 'react-bootstrap/Image';
import MainContainer from '../../util/MainContainer';
import Typography from '../../util/Typography';
import StoreLogos from '../../util/StoreLogos';
import OffsideBlue from '../../assets/images/offsideblue.svg';

const HomeSection = () => {
    return (
        <React.Fragment>
            <MainContainer>
                <Row className='mb-md-5 pb-md-5 home-container'>
                    <Col>
                        <Image src={OffsideBlue} width="80%" />
                        <Row className='pt-md-5'>
                            <Typography.HeadingExtraBold>Unforgettable <br /> matches,</Typography.HeadingExtraBold>
                            <Typography.HeadingExtraBold classes={['text-primary']}>unforgettable <br /> chats.</Typography.HeadingExtraBold>
                        </Row>
                        <Row className='mt-2 pt-md-2 store-logos-home'>
                            <h6 className='text-white fs-4'>Download the Offside app</h6>
                            <StoreLogos />
                        </Row>
                        <Row>
                            <Typography.HeadingRegular classes={['fw-bold text-primary']} styles={{ marginTop: '-32px' }}>Your virtual hangout with friends</Typography.HeadingRegular>
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