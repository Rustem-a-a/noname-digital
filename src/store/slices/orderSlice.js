import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const addDynamicPageProduct = createAsyncThunk('orderSlice/addDynamicPageProduct',
    async (id) => {
        try {
            console.log(id)
            const {data} = await axios(`https://dummyjson.com/products/${id}`)
            console.log(data)
            return data
        } catch (e) {
            console.log(e)
        }
    })

const initialState = {
    order:
        [],
    isActiveModal: false,
    isMessageModal: false,
    dynamicPageProduct: ''
}
const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addToCart(state, action) {
            if (state.order.length !== 0) {
                if (!state.order.find(v => v?.id === action.payload?.id)) {
                    state.order.push(...action.payload)
                }
            } else if (state.order.length === 0) {
                if (!!action.payload) {
                    state.order.push(...action.payload)
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.order))
        },
        toggleActiveModal(state) {
            state.isActiveModal = !state.isActiveModal
        },
        toggleMessageModal(state) {
            state.isMessageModal = !state.isMessageModal
        },

    },
    extraReducers: {
        [addDynamicPageProduct.pending]: (state) => {
        },
        [addDynamicPageProduct.fulfilled]: (state, action) => {
            state.dynamicPageProduct = action.payload
        },
        [addDynamicPageProduct.rejected]: (state) => {
        },
    }
})

export const {
    addToCart, toggleActiveModal, toggleMessageModal
} = orderSlice.actions
export default orderSlice.reducer