import {configureStore} from "@reduxjs/toolkit";
import orderReducer from './slices/orderSlice'
import authReducer from './slices/authSlice'


export default configureStore({
    reducer: {
        orderReducer,
        authReducer
    }
})