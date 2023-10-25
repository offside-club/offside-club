import React from "react";
import styles from "./mobileApp.module.scss";
import Image from "next/image";

const MobileApp = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["image_section"]}>
        <div className={styles["image1"]}>
          <Image
            src="/images/appStats.png"
            alt="mobile app"
            width={401}
            height={811}
            priority
          />
        </div>
        <div className={styles["image2"]}>
          <Image
            src="/images/appHome.png"
            alt="mobile app"
            width={401}
            height={811}
            priority
          />
        </div>
        <div className={styles["image3"]}>
          <Image
            src="/images/appStandings.png"
            alt="mobile app"
            width={401}
            height={811}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
