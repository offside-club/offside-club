
//styles
import Image from 'next/image';
import styles from './storeButton.module.scss'
import classNames from "classnames";
import { useCallback, useMemo } from 'react';

export enum Store {
  IOS = "IOS",
  ANDROID = "ANDROID"
}

interface Props {
  store: Store
}

const StoreButton = ({  store = Store.ANDROID, ...otherProps }: Props) => {
    const link = useMemo(() => {
      if (store === Store.ANDROID) {
        return "https://play.google.com/store/apps/details?id=com.offsideclub&hl=en&gl=US"
      } else {
        return "https://apps.apple.com/in/app/offside/id6444310420"
      }
    }, [store]);

    return (
        <a href={link} target='_blank' className={styles["container"]} {...otherProps}  >
            <Image
              src={store === Store.ANDROID ? "/images/playstoreBlack.svg" : "/images/appstoreBlack.svg"}
              alt="appStore"
              width={37}
              height={40}
              priority
            />
            <div>
              <p className={styles["hint"]}>
                {store === Store.ANDROID ? "Get it On" : "Download on the"}
              </p>
              <p className={styles["subtitle3"]}>
              {store === Store.ANDROID ? "Google Play" : "App Store"}
              </p>
            </div>
        </a>
    )
}

export default StoreButton