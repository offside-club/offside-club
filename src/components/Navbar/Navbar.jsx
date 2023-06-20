import React from 'react';
import AppStoreLogo from '../../assets/images/appstore.png';
import PlayStoreLogo from '../../assets/images/playstore.png';
import OffsideLogo from '../../assets/images/offsideblue.svg'
import Insta from '../../assets/images/InstagramOctDen.png';
import styles from './Navbar.module.css';

const NavBar = () => {
  return (
    <section className={styles.navigation}>
      <div className={styles.brand}>
        <a href="#!">
          <img src={OffsideLogo} alt="offside logo" />
        </a>
      </div>
      <nav>
        <div className={styles.nav_mobile}><a id="navbar-toggle" href="#"><span></span></a></div>
        <ul className={styles.nav_list}>
          <li>
            <a style={{ marginRight: '20px' }}>Contact us</a>
          </li>
          <li>
            <a href='https://instagram.com/club_offside?igshid=MzRlODBiNWFlZA==' target='_blank'>  <img alt="Logo" src={Insta} className={styles.navLogoInsta} /></a>
          </li>
          <li>
            {/* <div className={styles.SocialMedia}> */}
            <a href='https://play.google.com/store/apps/details?id=com.offsideclub' target='_blank'><img src={PlayStoreLogo} className={styles.navLogo} alt="#logo" /></a>
            {/* </div> */}
          </li>
          <li>
            {/* <div className={styles.SocialMedia}> */}
            <a href='https://apps.apple.com/in/app/offsideclub/id6444310420' target='_blank'><img src={AppStoreLogo} className={styles.navLogo} alt="#logo" /></a>
            {/* </div> */}
          </li>
          <li>
            <a href="#!">
              <div className={styles.Downloadsbtn}>21k+ Downloads</div>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;