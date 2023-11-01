//styles
import Image from "next/image";
import styles from "./BlogHeader.module.scss";

import classNames from "classnames";
import Link from "next/link";
import PrimaryButton from "@/components/common/primaryButton";

interface BlogHeaderPropType {
    insta: boolean;
}

const BlogHeader = ({ insta }: BlogHeaderPropType) => {
    return (
        <div className={classNames(styles.container)}>
            <Link href={"/"}>
                <Image
                    src="/images/offsideLogo.svg"
                    alt="Logo"
                    width={205}
                    height={80}
                    priority
                />
            </Link>

            <div className={classNames(styles.container)}>
                {insta && <p className={classNames(styles['blogText'], styles['imgMr'])} >Blog</p>}
                {insta && <div className={styles['imgMr']}>
                    <Image
                        src="/images/insta.svg"
                        alt="Logo"
                        width={64}
                        height={64}
                        priority
                    />
                </div>}
                <div className={styles['imgMr']}>
                    <Image
                        src="/images/googlePlay.png"
                        alt="Logo"
                        width={201}
                        height={70}
                        priority
                    />
                </div>
                <div className={styles['imgMr']}>
                    <Image
                        src="/images/playStore.png"
                        alt="Logo"
                        width={201}
                        height={70}
                        priority
                    />
                </div>

                <div className={styles['downloadInfo']}>
                    <PrimaryButton text={"40k+ Downloads"} />
                </div>

                {/* </Link> */}
            </div>
        </div >
    );
};

export default BlogHeader;
