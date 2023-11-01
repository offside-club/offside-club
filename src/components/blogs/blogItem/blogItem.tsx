"use client"
import Image from "next/image";
import styles from './blogItem.module.scss'
import classNames from 'classnames';
import { useRouter } from 'next/navigation';

interface BlogItemPropType {
    id: string;
}

const BlogItem = ({ id }: BlogItemPropType) => {
    const router = useRouter();
    return (
        <div onClick={() => { router.push(`/blog/${id}`); }} className={classNames(styles['container'])}>
            <Image layout="responsive" height={325} width={440} className={classNames(styles['img'], styles['mb-28'])} src="/images/blog.png" alt={""} />
            <p className={classNames(styles['blogTitle'])}>Cummins admits for reconsideration</p>
            <div className={classNames(styles['row'], styles['align-center'], styles['mt-18'])}>
                <p className={styles['sportName']}>Cricket</p>
                <div className={classNames(styles['align-center'], styles['dotCont'])}>.</div>
                <p className={classNames(styles['sportName'], styles['date'])}>Wed, 23 July</p>
                <div className={classNames(styles['align-center'], styles['dotCont'])}>.</div>
                <p className={classNames(styles['sportName'], styles['date'])}>8:30 PM</p>
            </div>

        </div>
    )
}

export default BlogItem;