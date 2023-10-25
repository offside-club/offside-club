import React from 'react'
import classNames from "classnames";
import styles from "./section.module.scss";
import Image from 'next/image';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  backgroundColor?: string;
}

const RewardSection = ({
  title = "",
  description = "",
  image = "/images/appReward.png",
  backgroundColor = "#3F00C5"
}) => {
  return (
    <div style={{
      backgroundColor : backgroundColor
    }} className={classNames(styles["app_section"], styles["container"])}>
      <div className={styles["text_container"]}>
        <p className={styles["title2"]}>{title}</p>
        <div className={styles["image_container_mobile"]}>
          <Image
            src={image}
            alt="reward image"
            width={250}
            height={510}
            priority
          />
        </div>
        <p className={classNames(styles["desc"], styles["text2"])}>{description}</p>
      </div>
      <div className={styles["image_container"]}>
        <Image
          src={image}
          alt="reward image"
          width={496}
          height={1002.22}
          priority
        />
      </div>
    </div>
  )
}

export default RewardSection;