import { AiFillHeart, AiFillMessage, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import ImageProfile from '../images/ImageProfile';
import styles from './featured-news-item.module.css';
type Props = {
    isPromo?:boolean;
}

const getPromoCss = (isPromo:boolean) => {
    return isPromo ? styles.promo : "";
}

export default function FeaturedNewsItem({isPromo}:Props) {
    return (
        <div className={`${getPromoCss(isPromo ?? false)} ${styles.newsItem}`}>
            <img src="https://i.kinja-img.com/image/upload/c_fit,q_80,w_636/9bff9abba5c4953a7f8622bdb46a2a35.jpg" alt="" />
            <div className={styles.bgFilter}></div>
            <div className={styles.titleContainer}>
                <a 
                    href="/ign"
                    className={styles.title}
                >
                    Xbox Game Pass Subscribers Are Losing Big This Month Xbox Game Pass Subscribers Are Losing Big This Month Xbox Game Pass Subscribers Are Losing Big This Month Xbox Game Pass Subscribers Are Losing Big This Month
                </a>
                <div className={styles.footer}>
                    <div className={styles.footerLeft}>
                        <div className={styles.logoContainer}>
                            <ImageProfile 
                                imgUrl={'https://backloggamersphotos.blob.core.windows.net/articlesourceslogos/ign-logo.jpg'} 
                                altText={'IGN Logo'} 
                            />
                        </div>
                            <a className="noDecoration" href='https:ign.com'>IGN.com</a>
                        </div>
                    <div className={styles.footerRight}>
                        <div className={styles.footerRightItem}>
                            <AiOutlineHeart/>
                            9999
                            {/* <AiFillHeart/> */}

                        </div>
                        <div className={styles.footerRightItem}>
                            <AiOutlineShareAlt /> 0
                        </div>
                        <div className={styles.footerRightItem}>
                            <AiFillMessage/> 0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
