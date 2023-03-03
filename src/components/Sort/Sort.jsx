import React, {useEffect, useState} from 'react';
import styles from "./Sort.module.scss";
import {useParams} from "react-router-dom";

const Sort = ({sortDecreasePrice, sortIncreasePrice, sortName, sortRating}) => {
    const {path} = useParams()
    const [currentSort, setCurrentSort] = useState('выберите')
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        setCurrentSort('выберите')
    }, [path])
    return (
        <div className={styles.sort}>
            <p onClick={() => {
                sortDecreasePrice()
                setCurrentSort('сначала дорогие')
            }}>Сортировать:</p>
            <div className={styles.currentSort}
                 onMouseEnter={() => setIsActive(true)}
                 onMouseLeave={() => setIsActive(false)}>{currentSort}</div>
            <ul className={isActive ? `${styles.anotherSortPassive} ${styles.anotherSortActive}` : styles.anotherSortPassive}
                onMouseEnter={() => setIsActive(true)}
                onClick={() => setIsActive(false)}
                onMouseLeave={() => setIsActive(false)}>
                <li onClick={() => {
                    sortIncreasePrice()
                    setCurrentSort('сначала дешевые')
                }}>сначала дешевые
                </li>
                <li onClick={() => {
                    sortDecreasePrice()
                    setCurrentSort('сначала дорогие')
                }}
                >сначала дорогие
                </li>
                <li onClick={() => {
                    sortName()
                    setCurrentSort('по названию')
                }}>по названию
                </li>
                <li onClick={() => {
                    sortRating()
                    setCurrentSort('по рейтингу')
                }}>по рейтингу
                </li>
            </ul>
        </div>
    );
};

export default Sort;