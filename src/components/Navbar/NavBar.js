import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import LogoNavbar from '../../assets/images/offside_logo_main.svg';
import AppStoreLogo from '../../assets/images/app_store_logo.svg';
import PlayStoreLogo from '../../assets/images/play_store_logo.svg';
import constants from '../../util/constants';

const NavBar = () => {
    return (
        <React.Fragment>
            <Navbar bg="secondary" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="https://www.offside.club/">
                        <img
                            alt="Logo"
                            src={LogoNavbar}
                            className="d-inline-block align-top navbar-logo"
                        />
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <Nav.Link href={constants.appStoreURL} target="_blank">
                                <Image src={AppStoreLogo} className="navbar-store-logo navbar-app-store-logo" />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href={constants.playStoreURL} target="_blank">
                                <Image src={PlayStoreLogo} className="navbar-store-logo navbar-play-store-logo" />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </React.Fragment>
    );
};

export default NavBar;