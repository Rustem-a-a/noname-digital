import React, {useEffect, useState} from 'react';
import styles from './Carousel.module.scss'

const Carousel = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => {
                if (prev !== slides.length - 1) {
                    return prev + 1
                }
                else {
                    return 0
                }
            })
        }, 2000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div className={styles.wrapper}>
            <div
                style={{backgroundImage: `url(${slides[currentIndex]})`}}
                className={styles.children}>
            </div>
        </div>
    );
};

export default Carousel;