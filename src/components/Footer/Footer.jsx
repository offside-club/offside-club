import React from "react";
import styles from './Footer.module.css'
import Connect from "./Connect";
import AppStoreLogo from '../../assets/images/App_Store-Badge.svg';
import PlayStoreLogo from '../../assets/images/Google_Play-Badge.svg';
import OffsideLogo from '../../assets/images/offsideblue.svg';

const Footer = ()=>{
    return (
        <>
        <Connect/>
        <div className={styles.blackBackground}>
            <h1 className={styles.bold}>Get your own commentary <br/>box with friends on Offside!</h1>
            <span>30k+ DOWNLOADS</span>
            <div className={styles.social}>
               <a href='https://apps.apple.com/in/app/offsideclub/id6444310420' target='_blank'> <img alt="Logo" src={AppStoreLogo} className={`${styles.logo} ${styles.AppStoreLogo}`}/></a>
               <a href='https://play.google.com/store/apps/details?id=com.offsideclub' target='_blank'><img alt="Logo" src={PlayStoreLogo} className={`${styles.logo} ${styles.PlayStoreLogo}`}/></a>
            </div>
            <div className={styles.lastPart}>
                <h4>Firkle sports India Pvt. Ltd.</h4>
                <img alt="offsideLogo" src={OffsideLogo} className={styles.offsideLogo}/>
                <h4><a href="https://docs.google.com/document/d/1UKgZn0MU0u7idJGODOllg1M56-RvlXLyC8W96jjQX9s/edit" target='_blank'>Terms and Conditions</a></h4>
            </div>
        </div>
        </>
    )
}

export default Footer;