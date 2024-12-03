import styles from './featured-news.module.css';
import FeaturedNewsItem from './FeaturedNewsItem';

export default function FeaturedNews() {
    return (
        <div>
            <h1>Featured Gaming News</h1>
            <div className={styles.featured}>      
                <FeaturedNewsItem isPromo={true} />           
                <FeaturedNewsItem />           
                <FeaturedNewsItem />           
                <FeaturedNewsItem />           
                <FeaturedNewsItem />           
            </div>
      </div>
    )
}
