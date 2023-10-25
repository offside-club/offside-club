import React from "react";
import Link from 'next/link';

import styles from "./footer.module.scss";
import OffsideLogo from "@/components/common/offsideLogo";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["section"]}>
        <div className={styles["row"]}>
        <p className={styles["text2"]}>Backed by</p>
          <Image
              src="/images/koox.png"
              alt="koox"
              width={80}
              height={40}
              priority
            />
        </div>
        
      </div>
      <div className={styles["section"]}>
        <OffsideLogo width={342} height={134} />
        <p className={styles["text2"]}>Firkle sports India Pvt. Ltd.</p>
      </div>
      <div className={styles["section"]}>
        <Link href={"/terms"}>
        <p className={styles["text2"]}>Terms and Conditions</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
