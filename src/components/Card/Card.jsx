import React from 'react';
import styles from './Card.module.scss'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, toggleMessageModal} from "../../store/slices/orderSlice";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = (props) => {
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const chooseProduct = () => {
        navigate(`/currentCategory/${props.category}/${props.id}`)
    }
    return (
        <div className={styles.wrapper}>
            <img onClick={() => {
                chooseProduct()
            }} src={props.thumbnail} alt=""/>
            <div className={styles.description}>{props.title}</div>
            <div className={styles.price}>{props.price}</div>
            <div className={styles.rating}>Рейтинг:{props.rating}</div>
            <button onClick={() => {
                if (isAuth) {
                    dispatch(addToCart([props]))
                    toast("Товар добавлен в корзину")
                } else {
                    dispatch(toggleMessageModal())
                }
            }}>В корзину
            </button>
        </div>
    );
};

export default Card;