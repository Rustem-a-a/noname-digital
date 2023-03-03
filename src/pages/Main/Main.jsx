import React, {useEffect, useState} from 'react';
import styles from './Main.module.scss'
import {banner} from "../../store/products";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";
import {Link} from "react-router-dom";
import axios from "axios";
import {categories} from "../../store/products";
import {ToastContainer} from "react-toastify";

const Main = () => {
    const [allProductsFetch, setAllProductsFetch] = useState([])
    useEffect(() => {
        async function setProducts() {
            const {data} = await axios('https://dummyjson.com/products?limit=50')
            setAllProductsFetch(data.products)
        }

        setProducts()
    }, [])
    return (
        <div className={styles.wrapper}>
            <div className={styles.category}>
                {categories.map(v => <p><Link to={`/currentCategory/${v.path}`}>{v.name}</Link></p>)}
            </div>
            <div className={styles.carousel}>
                <Carousel slides={banner}/>
            </div>
            <div className={styles.cardWrapper}>
                {allProductsFetch.map((v) => <Card key={v.id} {...v}/>)}
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Main;