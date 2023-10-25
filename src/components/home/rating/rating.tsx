import React from "react";
import styles from "./rating.module.scss";
import StoreButton, { Store } from "@/components/common/storeButton";

const Raiting = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["downloads_section"]}>
        <h2 className={styles["header2"]}>40k + Downloads</h2>
      </div>
      <div className={styles["rating_section"]}>
        <div className={styles["rating"]}>
          <h2 className={styles["header2"]}>Play store</h2>
          <p className={styles["largeText"]}>4.8</p>
          <StoreButton store={Store.ANDROID} />
        </div>
        <div className={styles["rating"]}>
          <h2 className={styles["header2"]}>App Store</h2>
          <p className={styles["largeText"]}>4.8</p>
          <StoreButton store={Store.IOS} />
        </div>
      </div>
      <div className={styles["store_buttons"]}>
          <StoreButton store={Store.ANDROID} />
          <StoreButton store={Store.IOS} />
    </div>
    </div>
  );
};

export default Raiting;
