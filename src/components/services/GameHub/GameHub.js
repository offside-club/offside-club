import React from 'react';
import Row from 'react-bootstrap/Row';
import Typography from '../../../util/Typography';
import Phone1 from '../../../assets/images/Gamehub_phone_1.svg'
import Phone2 from '../../../assets/images/Gamehub_phone_2.svg';
import Phone3 from '../../../assets/images/Gamehub_phone_3.svg';
import ImageContainer from './ImageContainer/ImageContainer';

const GameHub = () => {
    return (
        <React.Fragment>
            <Row>
                <Typography.HeadingExtraBold classes={['mt-5', 'text-center']}>Game hub is unique to every match, combining:</Typography.HeadingExtraBold>
            </Row>
            <Row className='g-2'>
                <ImageContainer
                    image={Phone1}
                    caption="Prediction"
                    description="Predict the future and impress your friends"
                />
                <ImageContainer
                    image={Phone2}
                    caption="Group chat"
                    description="AI-guided group discussions"
                />
                <ImageContainer
                    image={Phone3}
                    caption="Live match updates"
                    description="Summarized match and ball-by-ball updates"
                />
            </Row>
        </React.Fragment>
    );
};

export default GameHub;
