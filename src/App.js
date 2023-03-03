import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Orders from "./pages/Account/Own";
import Login from "./pages/Authorization/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import Registration from "./pages/Authorization/Registration/Registration";
import Main from "./pages/Main/Main";
import CurrentCategory from "./pages/CurrentCategory/CurrentCategory";
import Dynamic from "./pages/Dynamic/Dynamic";
import {useEffect} from "react";
import {addToCart} from "./store/slices/orderSlice";
import Own from "./pages/Account/Own";
import Layout from "./components/Layout";

function App() {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.authReducer.isAuth)
    useEffect(() => {
        dispatch(addToCart(JSON.parse(localStorage.getItem('cart'))))
    }, [])

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path='orderHistory' element={<Orders/>}/>
                    {!isAuth
                        ? <Route path='login' element={<Login/>}/>
                        : <Route path='login' element={<Navigate to='/' replace/>}/>}}
                    <Route path='registration' element={<Registration/>}/>
                    <Route path='currentCategory/:path' element={<CurrentCategory/>}/>
                    <Route path='currentCategory/:path/:id' element={<Dynamic/>}/>
                    {isAuth && <Route path='own' element={<Own/>}/>}
                </Route>
            </Routes>
        </div>
    );
}

export default App;
