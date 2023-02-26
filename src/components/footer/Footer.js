import React from 'react';
import Container from 'react-bootstrap/Container';
import BottomSection from './bottomSection/BottomSection';
import MidSection from './midSection/MidSection';
import TopSection from './topSection/TopSection';


const Footer = () => {
    return (
        <React.Fragment>
            <Container className="footer">
                <TopSection />
                <MidSection />
                <BottomSection />
            </Container>
        </React.Fragment>
    );
};

export default Footer;