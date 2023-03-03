import styles from './Header.module.scss'
import React from 'react';
import {Link, NavLink} from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {toggleActiveModal} from "../../store/slices/orderSlice";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.authReducer.isAuth)
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.logo}>
                <div><Link to='/'>NONAME<br/>DIGITAL</Link>
                </div>
            </h1>
            <div className={styles.description}>
                <h2 className={styles.descriptionText}>
                    Магазин товаров для Вас и вашего дома
                </h2>
                <div className={styles.pages}>
                    <NavLink to='/'>Домашняя</NavLink>
                    <NavLink to={isAuth ? 'own' : 'login'}>Кабинет</NavLink>
                    <NavLink onClick={() => {
                        dispatch(toggleActiveModal())
                    }}>Корзина</NavLink>
                </div>
            </div>
            <FontAwesomeIcon className={styles.cartIcon} onClick={() => {
                dispatch(toggleActiveModal())
            }} size='2x' icon={faCartShopping}/>
            <div className={styles.authorizationWrapper}>
                {!isAuth
                    ? <>
                        <div className={styles.firebase}>
                            <h3>Firebase</h3>
                            <p><Link to='/login'>Войти</Link></p>
                        </div>
                        <div className={styles.Auth0}>
                            <h3>Auth0</h3>
                            <LoginButton/>
                        </div>
                    </>
                    : <div className={styles.logout}><LogoutButton/></div>
                }
            </div>
        </div>
    );
};

export default Header;