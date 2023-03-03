import React, {useEffect, useState} from 'react';
import styles from "../Dynamic/Dynamic.module.scss";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addDynamicPageProduct, addToCart, toggleMessageModal} from "../../store/slices/orderSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dynamic = () => {
    const dynamicPageProduct = useSelector(state => state.orderReducer.dynamicPageProduct)
    const [product,setProduct] = useState(dynamicPageProduct)
    const [currentImage,setCurrentImage] = useState(dynamicPageProduct.thumbnail)
    const {id} = useParams()
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const dispatch = useDispatch()
    console.log(dynamicPageProduct)
    useEffect(()=>{
        setProduct(dynamicPageProduct)
        setCurrentImage(dynamicPageProduct.thumbnail)
    },[dynamicPageProduct])
    useEffect(()=>{
        dispatch(addDynamicPageProduct(id))
    },[id])

    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <h2 className={styles.title}>{product?.title}</h2>
                <img className={styles.bigPhoto} src={currentImage} alt=""/>
                <div className={styles.smallPhotoWrapper}> {dynamicPageProduct.images?.map(v=> <img onClick={
                    ()=>{setCurrentImage(v)
                    }
                } className={styles.smallPhoto} src={v} alt=""/>)}  </div>
            </div>
            <div className={styles.about}>
                    <p className={styles.brand}>Производитель:<br/> {product?.brand}</p>
                <br/>
                <p className={styles.description}>Описание: <br/> {product?.description}</p>
                <br/>
                    <p className={styles.discountPercentage}>Скидка: {product?.discountPercentage}</p>

                    <p className={styles.rating}>Рейтинг: {product?.rating}</p>

                    <p className={styles.stock}>На складе: {product?.stock}</p>
                <button className={styles.btn} onClick={()=> {
                    if(isAuth){dispatch(addToCart([product]))
                        toast("Товар добавлен в корзину")}
                    else {dispatch(toggleMessageModal())
                    }
                }
                }>В корзину</button>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Dynamic;