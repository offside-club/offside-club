import React from 'react';
import Container from 'react-bootstrap/Container';
import MidSection from './midSection/MidSection';
import TopSection from './topSection/TopSection';


const Footer = () => {
    return (
        <React.Fragment>
            <Container className="footer">
                <TopSection />
                <MidSection />
            </Container>
        </React.Fragment>
    );
};

export default Footer;