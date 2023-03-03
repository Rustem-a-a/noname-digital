import React from 'react';
import {useSelector} from "react-redux";
import {Outlet} from 'react-router-dom'
import Header from "./Header/Header";
import Cart from "../pages/Cart/Cart";
import Message from "./Message/Message";
import Footer from "./Footer/Footer";

const Layout = () => {
    const isModalActive = useSelector(state => state.orderReducer.isActiveModal)
    const isMessageModal = useSelector(state => state.orderReducer.isMessageModal)
    return (
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Header/>
            {isModalActive && <Cart/>}
            {isMessageModal && <Message/>}
            <div style={{flex: '1 1 auto'}}>
                <Outlet/>
            </div>

            <Footer/>
        </div>
    );
};

export default Layout;