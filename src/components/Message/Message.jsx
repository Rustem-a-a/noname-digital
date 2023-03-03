import React from 'react';
import styles from './Message.module.scss'
import {useDispatch} from "react-redux";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {toggleMessageModal} from "../../store/slices/orderSlice";
import {Link} from "react-router-dom";

const Message = () => {
    const dispatch = useDispatch()
    return (
        <div className={styles.wrapper} onClick={() => {
            dispatch(toggleMessageModal())
        }}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <FontAwesomeIcon className={styles.close} size="3x" onClick={() => {
                    dispatch(toggleMessageModal())
                }} icon={faCircleXmark}/>
                <h3 className={styles.title}>Чтобы добавить товар в корзину, Вам нужно авторизоваться</h3>
                <div className={styles.continue} onClick={() => {
                    dispatch(toggleMessageModal())
                }}><Link to='/login'>Войдите</Link>
                </div>
            </div>
        </div>
    );
};

export default Message;