import React, {useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/slices/authSlice";

const LoginButton = () => {
    const {loginWithRedirect, user} = useAuth0();
    const dispatch = useDispatch()
    console.log(user)
    useEffect(() => {
        if (user !== undefined) {
            dispatch(setUser({
                    email: 'user.email',
                    token: 'user.sub',
                    id: '21312323',
                }
            ))
        }
    }, [user])
    return <p style={{cursor: 'pointer'}} onClick={() => {
        loginWithRedirect()
    }}>Войти</p>;
};

export default LoginButton;