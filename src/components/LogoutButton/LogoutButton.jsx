import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useDispatch} from "react-redux";
import {logoutRedux} from "../../store/slices/authSlice";

const LogoutButton = () => {
    const {logout} = useAuth0();
    const dispatch = useDispatch()
    console.log(logout)
    return (
        <p style={{cursor: 'pointer'}} onClick={() => {
            logout({logoutParams: {returnTo: window.location.origin}})
            dispatch(logoutRedux)
        }}>
            Выйти
        </p>
    );
};

export default LogoutButton;
