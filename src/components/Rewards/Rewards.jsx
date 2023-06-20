import React from "react";
import Reward from "../../assets/images/Pop up.png";
import Rewards1 from "../../assets/images/Rectangle 3284.png";
import Rewards2 from "../../assets/images/Rectangle 3282.jpg";
import Phone from "../../assets/images/phonecase.png";
import styles from "./Rewards.module.css";
// import lounge from '../../assets/images/Lounge.jpg';
// import Heading from "../../util/Heading";
// import ProgressBar from "../../util/ProgressBar.js";
// import PhoneCase from "../../assets/images/phoneScreen (1).png";
// import Coin from "../../assets/images/coin2 9.png";
// import offsideCoin from "../../assets/images/Union.png";
// import Star3 from "../../assets/images/Star 3.png";
// import Star1 from "../../assets/images/Star 1.png";
// import Star2 from "../../assets/images/Star 2.png";
// import Shoes from "../../assets/images/shoes 1.png";

const Rewards = () => {
  // const progress = 75;
  return (
    <>
      <div className={styles.RewardSection}>


        {/* <div className={styles.leftSection}>
          <div className={styles.Rewardbox}>
            <div className={styles.centered}>
              <img src={OffsideLogo} alt="#logo" />
              <h3>Referral rewards</h3>
            </div>
            <div className={styles.inLine}>
              <p className={styles.text}>
                5 Users can earn an Amazon gift card worth INR. 200 for each
                successful referral, and 5 new users can earn an Amazon gift
                card worth INR. 100 daily.
              </p>
              <div className={styles.cardImg}>
                <img src={Voucher} alt="#" className={styles.cardImg} />
              </div>
            </div>
          </div>

          <div className={styles.Rewardbox}>
            <div className={styles.centered}>
              <img src={OffsideLogo} alt="#logo" />
              <h3>Referral rewards</h3>
            </div>
            <div className={styles.inLine}>
              <p className={styles.text}>
                5 Users can earn an Amazon gift card worth INR. 200 for each
                successful referral, and 5 new users can earn an Amazon gift
                card worth INR. 100 daily.
              </p>
              <div className={styles.cardImg}>

              <img className={styles.cardImg} src={Watch} alt="#watch" />
              </div>
            </div>
          </div>
        </div> */}

        <div className={styles.middleSection}>
          <img src={Reward} alt="#phone" />
        </div>

        <div className={styles.middleSection}>
          <img src={Phone} alt="#phone" />
        </div>

        <div className={styles.leftSection}>
          <img src={Rewards1} alt="#reward" />
          <img src={Rewards2} alt="#reward" />
        </div>

        {/* <div className={styles.leftSection}>
          
          <div className={styles.rewards_img}>
            <img src={Rewards1} alt="#reward" />
          </div>
          <div className={styles.rewards_img}>
            <img src={Rewards2} alt="#reward" />
          </div>
        </div> */}
      </div>


    </>
  );
};

export default Rewards;

/*import React from "react";
import Heading from "../../util/Heading";
import styles from "./Rewards.module.css"

const Rewards = () =>{
    return(
        <>
         <div className={styles.rewardBox}>
         <Heading heading="How to earn Rewards" subheading="A place that makes conversations as memorable as the matches."/>
            <div className={styles.leftRight}>
              <img></img>
              <div className={styles.downDropDowm}>
                <downDropDownBox></downDropDownBox>
              </div>
            </div>
            <Heading heading="Winning is the best feeling in the world, but the thrill of the contest is even better" subheading="A place that makes conversations as memorable as the matches."/>
            <div className={styles.imgSection}>
              <div className={styles.rewardsimg}>
                <img/>
                <p>info</p>
              </div>

              <div className={styles.rewardsimg}>
                <img/>
                <p>info</p>
              </div>
            </div>
          </div>
        </>
    )
}

export default Rewards;*/
