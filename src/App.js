import React from 'react';
// import './App.css';
import './style.scss';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Rewards from './components/rewards/Rewards';
// import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import './assets/fonts/FontsFree-Net-NeueMachina-Ultrabold.ttf'
import NavBar from './components/Navbar/NavBar';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
      <Services />
      <Rewards />
      {/* <Testimonials /> */}
      <Footer />
    </React.Fragment>
  );
};

export default App;