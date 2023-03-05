import React, {useEffect, useState} from 'react';
import styles from './Carousel.module.scss'

const Carousel = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => {
                if (prev !== slides.length - 1) {
                    return prev + 1
                } else {
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
            <img
                src={slides[currentIndex]}
                className={styles.children}>
            </img>
        </div>
    );
};

export default Carousel;