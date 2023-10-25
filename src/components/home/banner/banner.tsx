import React from "react";
import styles from "./banner.module.scss";
import Image from "next/image";

interface Props {
  text?: string;
}

const Banner = ({ text =  "" }: Props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["text_container"]}>
        <h1 className={styles["title"]}>{text}</h1>
        <Image
          className={styles.logo}
          src="/images/diamond.svg"
          alt="diamond"
          width={15}
          height={25}
          priority
        />
        <h1 className={styles["title"]}>{text}</h1>
      </div>
    </div>
  );
};

export default Banner;
