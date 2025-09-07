import {createSlice} from "@reduxjs/toolkit";


const basket = createSlice({
    name:'basket',
    initialState: {
        data: []
    },
    reducers: {
        addBasket : (state,action) => {
            if (state.data.some((item) => item.id === action.payload.id)) {
                state.data = state.data.map((item) => {
                    if (item.id === action.payload.id) {
                        return {...item, count : item.count + 1}
                    }
                    return item
                })
            } else {
                state.data = [...state.data, {
                    id : action.payload.id,
                    count : 1,
                    price: action.payload.price
                }]
            }
        },
        removeBasket : (state,action) => {
            if (state.data.find((item) => item.id === action.payload).count > 1) {
                state.data = state.data.map((item) => {
                    if (item.id === action.payload) {
                        return {...item, count : item.count - 1}
                    }
                    return item
                })
            } else {
                state.data = state.data.filter((item) => item.id !== action.payload )
            }
        },
        removeBasketAlone : (state,action) => {
            state.data = state.data.filter((item) => item.id !== action.payload )
        },
        clearBasket : (state) => {
            state.data = []
        }
    }
})

export const {addBasket,removeBasket,removeBasketAlone,clearBasket} = basket.actions
export default basket.reducer