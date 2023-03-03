import React, {useState} from 'react';
import Card from "../../components/Card/Card";
import styles from './CurrentCategory.module.scss'
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {categories} from "../../store/products";
import Sort from "../../components/Sort/Sort";
import {ToastContainer} from "react-toastify";

const CurrentCategory = () => {
    const [currentCategory,setCurrentCategory] = useState([])
    const {path} = useParams()
    const refresh = async () => {
        const {data} = await axios(`https://dummyjson.com/products/category/${path}`)
        setCurrentCategory(data.products)
    }
    useEffect(() => {
        refresh()
    }, [path])
    const sortDecreasePrice = ()=>{
        setCurrentCategory([...currentCategory.sort((a,b)=>b.price-a.price)])
    }
    const sortIncreasePrice = ()=>{
        setCurrentCategory([...currentCategory.sort((a,b)=>a.price-b.price)])
    }
    const sortName = ()=>{
        setCurrentCategory([...currentCategory.sort((a,b)=>a.title.localeCompare(b.title))])
    }
    const sortRating = ()=>{
        setCurrentCategory([...currentCategory.sort((a,b)=>a.rating-b.rating)])
    }

    return (

        <div className={styles.wrapper}>
            <ToastContainer />
            <div className={styles.category}>
                {categories.map(v => <Link key={v.id} to={`/currentCategory/${v.path}`}>{v.name}</Link>)}
            </div>
                <div className={styles.aboveCategory}>
                    <div className={styles.sorting}>
                        <Sort
                            currentCategory={currentCategory}
                            sortDecreasePrice={sortDecreasePrice}
                            sortIncreasePrice={sortIncreasePrice}
                            sortName={sortName}
                            sortRating={sortRating}
                        />
                    </div>
                          </div>

                <div className={styles.cardWrapper}>
                {currentCategory.map((v) => <Card key={v.id} {...v} />)}
            </div>
        </div>
    );
};

export default CurrentCategory;