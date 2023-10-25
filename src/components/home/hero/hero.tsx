import React from 'react';

// animations

// styles
import styles from "./hero.module.scss";
import StoreButton, { Store } from '@/components/common/storeButton';

const Hero = () => {
  return (
    <div className={styles["container"]}>
        <h1 className={styles["header1"]}>The all-in-one cricket app.</h1>
        <h2 className={styles["header2"]}>Join the fastest growing cricket app and win exciting rewards!</h2>
        <div className={styles["store_buttons"]}>
          <StoreButton store={Store.ANDROID} />
          <StoreButton store={Store.IOS} />
        </div>
    </div>
  )
}

export default Hero