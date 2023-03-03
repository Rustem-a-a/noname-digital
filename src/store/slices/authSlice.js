import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email: '',
    token: '',
    id: '',
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthFromLS(state) {
            state.isAuth = !!localStorage.getItem('isAuth')
        },
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id
            state.isAuth = true
            localStorage.setItem('isAuth','1')

        },
        logoutRedux(state) {
            state.email = ''
            state.token = ''
            state.id = ''
            state.isAuth = false
            localStorage.setItem('isAuth','')
        }
    }

})
export const {setUser, logoutRedux,setAuthFromLS} = authSlice.actions
export default authSlice.reducer