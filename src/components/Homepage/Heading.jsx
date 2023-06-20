import React from "react"
import styles from "./homepage.module.css";
import AppStoreLogo from '../../assets/images/App_Store-Badge.svg';
import PlayStoreLogo from '../../assets/images/Google_Play-Badge.svg';
// import OffsideLogo from '../../assets/images/offsideblue.svg'

const Heading =()=>{
    return(
        <>
        <div className={styles.headingBox}>
            <h1 className={styles.heading}>Where the game meets the gossip.</h1>
            <h3>Don’t just watch, experience the game</h3>
            <div className={styles.SocialMedia}>
                <a href='https://play.google.com/store/apps/details?id=com.offsideclub' target='_blank'><img src={PlayStoreLogo} className={styles.navLogo} alt="#logo"/></a>
                <a href='https://apps.apple.com/in/app/offsideclub/id6444310420' target='_blank'><img src={AppStoreLogo} className={styles.navLogo} alt="#logo"/></a>
            </div>
        </div>
        </>
    )
}

export default Heading;