import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.logo}>
                <div>NONAME</div>
                <div>DIGITAL</div>
            </h1>
            <h2 className={styles.description}>
                Интернет магазин товаров для Вас
            </h2>
            <div className={styles.authorizationWrapper}>
                <p>+380730118200</p>
                <p>ukraine.rustem@gmail.com</p>
                <p>Rustem Abdulaev</p>
            </div>
        </div>
    );
};

export default Footer;