import React from "react";
import Image from "next/image";

// styles
import styles from "./download.module.scss";
import StoreButton, { Store } from "@/components/common/storeButton";

const Download = () => {
  return (
    <div className={styles["outer_container"]}>
      <div className={styles["container"]}>
        <div className={styles["outer_top"]}>
          <div className={styles["top_section"]}>
            <div>
              <Image
                className={styles.logo}
                src="/images/playstoreWhite.svg"
                alt="playstore logo"
                width={32}
                height={35.33}
                priority
              />
              <h3 className={styles["header3"]}>Download now!</h3>
            </div>
            <div>
              <Image
                className={styles.logo}
                src="/images/appstoreWhite.svg"
                alt="appstore logo"
                width={32}
                height={35.33}
                priority
              />
              <h3 className={styles["header3"]}>Download now!</h3>
            </div>
          </div>
        </div>
        <div className={styles["outer_bottom"]}>
          <div className={styles["bottom_section"]}>
            <div>
              <Image
                className={styles.logo}
                src="/images/appstoreWhite.svg"
                alt="appstore logo"
                width={32}
                height={35.33}
                priority
              />
              <h3 className={styles["header3"]}>Download now!</h3>
            </div>
            <div>
              <Image
                className={styles.logo}
                src="/images/playstoreWhite.svg"
                alt="playstore logo"
                width={32}
                height={35.33}
                priority
              />
              <h3 className={styles["header3"]}>Download now!</h3>
            </div>
          </div>
        </div>

        <div className={styles["store_buttons"]}>
          <StoreButton store={Store.ANDROID} />
          <StoreButton store={Store.IOS} />
        </div>
      </div>
    </div>
  );
};

export default Download;
