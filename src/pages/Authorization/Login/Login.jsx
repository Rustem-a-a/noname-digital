import React, {useState} from 'react';
import styles from "../Authorization.module.scss";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import {Link} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../../../store/slices/authSlice";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => dispatch(setUser({
                email: user.email,
                token: user.accessToken,
                id: user.uid,
            })))
            .catch(console.error)
    }
    return (
        <div className={styles.wrapper} onClick={e => e.stopPropagation()}>
            <div className={styles.Name}>Login</div>
            <span className={styles.Username}><Input
                type='email'
                autoFocus
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                placeholder='Email'
                style={{width: '32.604vw', height: '5.833vh'}}

            /></span>
            <span className={styles.Password}><Input
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                placeholder='Password'
                style={{width: '32.604vw', height: '5.833vh'}}

            /></span>
            <div className={styles.Buttons}>
                <div className={styles.changeToLogin}>
                    <Button><Link to='/registration'>Создать аккаунт</Link></Button>
                </div>
                <div className={styles.send}>
                    <Button><Link to='/'>Отмена</Link></Button>
                    <Button
                        disabled={(email.trim().length || password.trim().length) && /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email) ? false : true}
                        onClick={() => {
                            handleLogin(email, password)
                        }}
                    >Войти</Button></div>
            </div>
        </div>
    );
};

export default Login;