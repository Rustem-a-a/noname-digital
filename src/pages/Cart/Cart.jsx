import React, {useEffect, useState} from 'react';
import styles from './Cart.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {toggleActiveModal} from "../../store/slices/orderSlice";
import {faCircleXmark, faMinus, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Cart = () => {
    const cart = useSelector(state => state.orderReducer.order)
    const dispatch = useDispatch()
    console.log(cart)
    return (
        <div className={styles.wrapper} onClick={() => {
            dispatch(toggleActiveModal())
        }}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <h1 className={styles.cartName}>Корзина</h1>
                <FontAwesomeIcon className={styles.cartClose} size="3x" onClick={() => {
                    dispatch(toggleActiveModal())
                }} icon={faCircleXmark}/>
                {/*<h2  onClick={()=>{dispatch(toggleActiveModal())}}>Закрыть</h2>*/}
                <div className={styles.products}>
                    {cart.map(v =>
                        <div key={v.id} className={styles.oneProduct}>
                            <div className={styles.close}><FontAwesomeIcon size="1x" icon={faTrash}/></div>
                            <img className={styles.photo} src={v.thumbnail}/>
                            <p className={styles.description}>{v.title}</p>
                            <p className={styles.minus}><FontAwesomeIcon size="1x" icon={faMinus}/></p>
                            <p className={styles.count}>{1}</p>
                            <p className={styles.plus}><FontAwesomeIcon size="1x" icon={faPlus}/></p>
                            <p className={styles.sum}>{v.price}</p>
                        </div>)}
                </div>
                <p className={styles.continue} onClick={() => {
                    dispatch(toggleActiveModal())
                }}>Продолжить выбор товаров</p>
                <p className={styles.total}>Итого: 32422</p>
                <p className={styles.toOrder} onClick={() => {
                    dispatch(toggleActiveModal())
                }}>Оформить заказ</p>
            </div>
        </div>
    );
};

export default Cart;