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
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id
            state.isAuth = true
            console.log(action)
        },
        logoutRedux(state) {
            state.email = ''
            state.token = ''
            state.id = ''
            state.isAuth = false
        }
    }

})
export const {setUser, logoutRedux} = authSlice.actions
export default authSlice.reducer