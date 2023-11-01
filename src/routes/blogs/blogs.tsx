import React from 'react'
import styles from './blogs.module.scss';
import '../../styles/common.scss';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
//components
import Footer from '@/components/home/footer';
import BlogHeader from '@/components/blogs/BlogHeader';
import BlogItem from '@/components/blogs/blogItem';

const blogs = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }]

const Blogs = () => {
    return (
        <div className={styles['container']}>
            <BlogHeader insta={false} />
            <div className={styles['blogsContainer']}>
                <div className={classNames(styles['align-center'], styles['row'])}>
                    <Link href={'/'}>
                        <Image
                            src="/images/back.svg"
                            alt="Offside Logo"
                            width={40}
                            height={40}
                            priority
                        />
                    </Link>
                    <p className={classNames(styles['boldHeader'], styles['ml-24'])}>Blogs</p>
                </div>
                <div className={classNames(styles['mt-56'], styles['align-center'], styles['row'], styles['gap-30'], styles['flex-wrap'])}>
                    {blogs.map((item, key) => {
                        return (
                            <BlogItem key={key} id={item?.id} />
                        )
                    })}
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Blogs