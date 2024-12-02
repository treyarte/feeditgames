import styles from './mobileNavBtn.module.css';
import btnStyles from './button.module.css';

type Props = {
    isMenuOpen:boolean;
    toggleMenu:() => void;
}

export default function HamburgerBtn({isMenuOpen, toggleMenu}:Props) {
    const getActiveStyle = () => {
        return isMenuOpen ? styles["isOpen"] : "";
    }

    return (
        <button 
            className={
                    `btn-no-style 
                    ${styles.hamburger} 
                    ${getActiveStyle()} 
                    display-mobile
                    ${btnStyles.btnNoStyle}`
            }
            onClick={toggleMenu} 
        >
            
            <div className={`${styles.bar}`}></div>
        </button>
    )
}