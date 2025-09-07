import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getClothes = createAsyncThunk(
    'get/getClothes',
    async (arg, { rejectWithValue }) => {
        try {
            const price = arg.price === 'default' ? '' : `?_sort=price&_order=${arg.price}`;
            const point = arg.point === 'default' ? '' : `&point=${arg.point}`; // Добавляем фильтр по point

            const res = await axios(`http://localhost:8080/clother${price}${point}`);

            if (res.status !== 200) {
                throw new Error('Ошибка при получении');
            }

            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const clother = createSlice({
    name: 'clother',
    initialState: {
        data: [],
        filter: {
            limit: 6,
            price: 'default',
            point: 'default', // Фильтр по point
        },
        status: 'idle',
        error: null
    },
    reducers: {
        changeFilterPrice: (state, action) => {
            state.filter.price = action.payload;
        },
        changeFilterPoint: (state, action) => { // Новое действие для фильтра по point
            state.filter.point = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getClothes.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getClothes.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getClothes.fulfilled, (state, action) => {
                state.status = 'success';
                state.data = action.payload;
            });
    }
});
export const {changeFilterPrice, changeFilterPoint} = clother.actions
export default clother.reducer;