import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Typography from '../../../../util/Typography';

const ImageContainer = ({ image, caption, description }) => {
    return (
        <React.Fragment>
            <Col xs={12} md={4}>
                <Image src={image} width="75%" className='d-block mx-auto' />
                <Typography.HeadingBold classes={['text-center mt-2']}>{caption}</Typography.HeadingBold>
                <Typography.HeadingRegular classes={['text-primary', 'text-center']}>{description}</Typography.HeadingRegular>
            </Col>
        </React.Fragment>
    );
};

export default ImageContainer;
