"use client"
//styles
import Image from "next/image";
import styles from "./header.module.scss";
//types
import PrimaryButton from "../primaryButton";
import OffsideLogo from "../offsideLogo";
import { useRouter } from 'next/navigation';


const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div>
        <OffsideLogo
          width={103.37}
          height={40.6}
        />

        <div className={styles["koox"]}>
          <p className={styles["smallText"]}>backed by</p>
          <Image
            src="/images/koox.png"
            alt="Offside Logo"
            width={40}
            height={20}
            priority
          />
        </div>
      </div>

      <PrimaryButton onClick={() => { router.replace('/blogs'); }} text={"Blog"} />
    </div>
  );
};

export default Header;
