import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormattedInputs from "./Phone";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './Placing.css'
import {Link, Navigate, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

const Placing = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        watch,
    } = useForm({
        mode: 'onChange',
    })

    const navigate = useNavigate();

    const { status } = useSelector(state => state.user);


    const basket = useSelector(s => s.basket)
    const clothes = useSelector(s => s.clother)

    const dispatch = useDispatch()

    const newClothes = clothes.data.filter(item => basket.data.some(el => el.id === item.id))

    console.log(newClothes)

    return (
        <section className="placing">
            <div className="container">
                <div className="box__block">
                    <div className="placing__box">
                        <div className="placing__block1">
                            <h1 className="placing__block1-title">
                                Ваши данные
                            </h1>
                            <Box
                                className='placing__block1-box'
                                component="form"
                                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                                noValidate
                                autoComplete="off"
                            ><TextField
                                className='placing__input'
                                id="outlined-multiline-flexible"
                                label="Ф.И.О."
                                multiline
                                maxRows={4}
                            />
                                <TextField
                                    {...register('email', {
                                        required: 'Пожалуйста, укажите ваш email.',
                                        minLength: {
                                            value: 7,
                                            message: 'Email должен содержать минимум 7 символов.',
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: 'Email может содержать максимум 30 символов.',
                                        },
                                        pattern: {
                                            value:
                                                /^(?=.*[a-zA-Z])(.{1,})@([a-zA-Z]{2,6})\.([a-zA-Z]{2,3})$/,
                                            message: 'Введите корректный email.',
                                        },
                                    })}
                                    className={`placing__input ${errors.email ? 'errors' : ''}`}
                                    placeholder=''
                                    type='email'
                                    id="outlined-multiline-flexible"
                                    label="E-Mail"
                                    multiline
                                    maxRows={4}
                                />

                                <FormattedInputs/>

                                <TextField
                                    className='placing__input'
                                    id="outlined-multiline-static"
                                    label="Адрес доставки"
                                    multiline
                                    rows={4}
                                    defaultValue=""
                                />
                            </Box>

                            <FormControlLabel className='placing__input1' control={<Checkbox defaultChecked />} label="Даю согласие на обработку персональных данных" />

                            <button className="placing__btn">Оформить заказ</button>
                        </div>

                        {
                            status === 'success' ? (
                                ''
                            ) : (
                                <div className="placing__block__2">
                                    <h2 className="placing__block2-title">
                                        У вас уже есть личный кабинет?
                                    </h2>
                                    <p className="placing__block2-text ffd">
                                        <span onClick={()=> navigate('/personal')} className="placing__span">Войдите</span> для отслеживания статуса заказа
                                    </p>
                                    <p className="placing__block2-text">
                                        Создание учётной записи поможет делать
                                        покупки быстрее и удобнее, не внося одни
                                        и те же данные многократно (адрес доставки
                                        имя, телефон и т.д.) Вы также, сможете
                                        отслеживать статус своего заказа, пользоваться
                                        Закладками, видеть свои предыдущие заказы,
                                        накапливать бонусные баллы (на них тоже можно
                                        покупать товары!) или получить скидку как
                                        постоянный покупатель.
                                    </p>
                                </div>
                            )
                        }
                    </div>
                    <div className="card-block">
                        <div className="card-col">
                            <div className="card-box">
                                <h2 className="card-box-tittle">Итого</h2>
                                <p className="card-box-tittle">{basket.data.reduce((acc,rec) => acc + rec.count * rec.price, 0)} ₽</p>
                            </div>
                            <div className="cardBlock-hr"></div>

                            <button className="placing__btn fd">Оформить заказ</button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Placing;