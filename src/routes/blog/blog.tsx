import React from 'react'
import styles from './blog.module.scss';
import '../../styles/common.scss';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
//components
import Footer from '@/components/home/footer';
import BlogHeader from '@/components/blogs/BlogHeader';
import { GetServerSideProps } from 'next';

interface Props {
    blogId: string;
}

const Blog = ({ blogId }: Props) => {
    console.log('blog', blogId)
    return (
        <div className={styles['container']}>
            <BlogHeader insta={true} />
            <div className={styles['blogsContainer']}>
                <p className={classNames(styles['mt-162'], styles['header2'], styles['smokeWhite'], styles['mb-24'])}>Cummins admits for reconsideration</p>

                <div className={classNames(styles['blog-row'])}>
                    <div className={classNames(styles['row'], styles['align-center'])}>
                        <Image
                            src="/images/profile.png"
                            alt="Offside Logo"
                            width={80}
                            height={80}
                            priority
                        />
                        <div className={classNames(styles['ml-16'],)}>
                            <p className={classNames(styles['name'])}>Ferdi Çıldız</p>
                            <p className={classNames(styles['name'], styles['date'])}>Aug 21, 2022 · 1 min read</p>
                        </div>
                    </div>
                    <div className={classNames(styles['row'], styles['align-center'], styles['share-mr'])}>
                        <Link className={styles['mr-28']} href={''}>
                            <Image
                                src="/images/twitter.svg"
                                alt="Offside Logo"
                                width={42}
                                height={42}
                                priority
                            />
                        </Link>
                        <Link className={styles['mr-28']} href={''}>
                            <Image
                                src="/images/linkedIn.svg"
                                alt="Offside Logo"
                                width={42}
                                height={42}
                                priority
                            />
                        </Link>
                        <Link className={styles['mr-28']} href={''}>
                            <Image
                                src="/images/facebook.svg"
                                alt="Offside Logo"
                                width={42}
                                height={42}
                                priority
                            />
                        </Link>
                        <Link className={styles['mr-28']} href={''}>
                            <Image
                                src="/images/bookMark.svg"
                                alt="Offside Logo"
                                width={42}
                                height={42}
                                priority
                            />
                        </Link>
                        <Link className={styles['mr-28']} href={''}>
                            <Image
                                src="/images/share.svg"
                                alt="Offside Logo"
                                width={42}
                                height={42}
                                priority
                            />
                        </Link>
                    </div>
                </div>

                <div >
                    <Image
                        className={classNames(styles['mt-70'], styles['largeImge'])}
                        src="/images/ground.png"
                        alt="Offside Logo"
                        width={1724}
                        height={931}
                        priority
                        layout="responsive"
                    />
                </div>

                <div className={classNames(styles['mt-104'], styles['ph-9'])}>
                    <p className={classNames(styles['title2'])}>Subtitle</p>
                    <p className={classNames(styles['text4'], styles['mt-32'])}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem nulla pharetra diam sit. Integer eget aliquet nibh praesent tristique magna sit.

                        A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc pulvinar sapien et ligula. Aliquet bibendum enim facilisis gravida neque. Ultricies tristique nulla aliquet enim tortor at auctor. Vitae tempus quam pellentesque nec nam aliquam sem et.

                        Pellentesque habitant morbi tristique senectus et netus et malesuada. Quis blandit turpis cursus in hac habitasse platea dictumst. Enim sit amet venenatis urna cursus. Aliquet risus feugiat in ante metus dictum at tempor. Parturient montes nascetur ridiculus mus.

                        Senectus et netus et malesuada fames ac. Interdum velit euismod in pellentesque.

                        Fames ac turpis egestas maecenas pharetra. Curabitur vitae nunc sed velit dignissim.
                    </p>
                </div>

                <div className={styles['mt-104']}>
                    <Image
                        className={classNames(styles['largeImge'])}
                        src="/images/ground.png"
                        alt="Offside Logo"
                        width={1724}
                        height={931}
                        priority
                        layout="responsive"
                    />
                </div>

                <div className={classNames(styles['mt-104'], styles['ph-9'])}>
                    <p className={classNames(styles['title2'])}>Subtitle</p>
                    <p className={classNames(styles['text4'], styles['mt-32'])}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem nulla pharetra diam sit. Integer eget aliquet nibh praesent tristique magna sit.

                        A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc pulvinar sapien et ligula. Aliquet bibendum enim facilisis gravida neque. Ultricies tristique nulla aliquet enim tortor at auctor. Vitae tempus quam pellentesque nec nam aliquam sem et.

                        Pellentesque habitant morbi tristique senectus et netus et malesuada. Quis blandit turpis cursus in hac habitasse platea dictumst. Enim sit amet venenatis urna cursus. Aliquet risus feugiat in ante metus dictum at tempor. Parturient montes nascetur ridiculus mus.

                        Senectus et netus et malesuada fames ac. Interdum velit euismod in pellentesque.

                        Fames ac turpis egestas maecenas pharetra. Curabitur vitae nunc sed velit dignissim.
                    </p>
                </div>

                {/* <div className={classNames(styles['align-center'], styles['row'])}>
                    <Link href={''}>
                        <Image
                            src="/images/back.svg"
                            alt="Offside Logo"
                            width={40}
                            height={40}
                            priority
                        />
                    </Link>
                    <p className={classNames(styles['boldHeader'], styles['ml-24'])}>Blogs</p>
                </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default Blog

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    console.log('query', query)
    let id = query?.id;

    return {
        props: {
            blogId: id,
        },
    };
};