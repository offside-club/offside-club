import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainContainer from '../../util/MainContainer';
import Typography from '../../util/Typography';
import GiftLogo from '../../assets/images/gift_logo.svg';
import RewardLogo from '../../assets/images/rewards_logo.svg';
import RewardsCard from './RewardsCards/RewardsCard';
import Image from 'react-bootstrap/Image';
import GoldenDiamond from '../../assets/images/golden_diamond.svg';

const REWARDS_DATA = [
    {
        title: 'Referral rewards',
        text: `Get rewarded for referring friends or joining through a friend’s referral on Offside.`,
        icon: RewardLogo
    },
    {
        title: `Prediction rewards`,
        text: `Win rewards by participating in non-money predictions with friends!`,
        icon: GiftLogo
    },
];

const Rewards = () => {
    return (
        <React.Fragment>
            <MainContainer>
                <Typography.HeadingExtraBold>Hangout with friends and win rewards</Typography.HeadingExtraBold>
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <RewardsCard {...REWARDS_DATA[0]} />
                        </Col>
                        <Col xs={12} md={4}>
                            <Image src={GoldenDiamond} width="90%" className='d-block mx-auto' />
                        </Col>
                        <Col xs={12} md={4}>
                            <RewardsCard {...REWARDS_DATA[1]} />
                        </Col>
                    </Row>
                </Container>
            </MainContainer>
        </React.Fragment>
    );
};

export default Rewards;