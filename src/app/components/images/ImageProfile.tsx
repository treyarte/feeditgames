import styles from './image-profile.module.css';
import Image from 'next/image';

type Props = {
    imgUrl:string;
    altText:string;
}
export default function ImageProfile({imgUrl, altText}:Props) {
    return (
        <div className={styles.imgProfileContainer}>
            <Image                          
                src={imgUrl} 
                alt={altText}
                width={0} 
                height={0} 
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
                // className="min-w-[307px]"
            />            
        </div>
    )
}
