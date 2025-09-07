import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Создание асинхронного действия для регистрации пользователя
export const registerUser = createAsyncThunk(
    'post/registerUser',
    async (arg, { rejectWithValue }) => {
        try {
            // Отправляем POST-запрос с данными
            const res = await axios.post('http://localhost:8080/register', arg);

            // Если статус ответа не 201 (Created), выбрасываем ошибку
            if (res.status !== 201) {
                throw new Error('Ошибка при создании');
            }
            // Возвращаем данные пользователя и токен
            return res.data;
        } catch (err) {
            // Если ошибка, возвращаем сообщение об ошибке
            return rejectWithValue(err.message);
        }
    }
);
export const loginUser = createAsyncThunk(
    'post/loginUser',
    async (arg, {rejectWithValue}) => {
        try {
            const res = await axios.post('http://localhost:8080/login',arg)

            console.log(res)
            if (res.statusText !== "OK") {
                throw new Error('Ошибка при создании')
            }

            return res.data

        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

// Создание слайса с состоянием для пользователя
const user = createSlice({
    name: "user",
    initialState: {
        user: null,
        status: 'idle',
        token: null,
        error: null,  // Добавлено для хранения ошибок
    },
    reducers: {
        logOut : (state,action) => {
            state.user = null
            state.status = 'idle'
            state.token = null
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            // Обработка состояния при ожидании ответа
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;  // При отправке запроса обнуляем ошибку
            })
            // Обработка состояния при ошибке
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload || 'Произошла ошибка при регистрации';  // Ошибка, если она есть
            })
            // Обработка состояния при успешной регистрации
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'success';
                state.user = action.payload.user;
                state.token = action.payload.accessToken;
                state.error = null;  // При успешной регистрации обнуляем ошибку
            })
            .addCase(loginUser.pending, (state,action) => {
            state.status = 'loading'
            state.error = null
        })
            .addCase(loginUser.rejected, (state,action) => {
                state.status = 'error'
                state.error = action.payload
            })
            .addCase(loginUser.fulfilled, (state,action) => {
                state.status = 'success'
                state.user = action.payload.user
                state.token = action.payload.accessToken
            })
    }
});
const initialState = {
    user: null,
    status: 'idle',
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };
        case 'LOGOUT_USER':
            return {
                ...state,
                user: null,
                status: 'idle',
            };
        // Другие действия...
        default:
            return state;
    }
};

// Action creator


// Экспорт редьюсера
export const setUser  = (user) => ({
    type: 'SET_USER',
    payload: user,
});

export const {logOut} = user.actions

export default user.reducer;
