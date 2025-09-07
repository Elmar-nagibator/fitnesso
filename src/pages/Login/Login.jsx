import React from 'react';
import "./Login.scss";
import {Link, Navigate, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../store/redusers/user";

const Login = () => {
    const navigate = useNavigate();
    const {status, user, error,token} = useSelector(state => state.user)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const dispatch = useDispatch()


    const logUser = (data) => {

        dispatch(loginUser(data))

    };

    if (status === 'success') {
        return <Navigate to='/'/>
    }


    return (
        <section className="login">
            <div className="container">
                <form noValidate className="login__form" onSubmit={handleSubmit(logUser)}>
                    <h1 className="login__title">Вход в личный кабинет</h1>
                    <div className="login__group">
                        <input
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Пожалуйста, укажите ваш email.',
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Введите корректный адрес электронной почты.',
                                },
                            })}
                            className={`register__field ${errors.email ? 'error' : ''}`}
                            placeholder=""
                            type="email"
                        />
                        <span>{errors.email && errors.email.message}</span>
                        <label className="login__label">Электронная почта</label>
                    </div>

                    {/* Пароль */}
                    <div className="login__group">
                        <input
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Пожалуйста, укажите ваш пароль.',
                            },
                            minLength: {
                                value: 8,
                                message: 'Пароль должен содержать минимум 8 символов.',
                            },
                        })}
                        className={`register__field ${errors.password ? 'error' : ''}`}
                        placeholder=""
                        type="password"
                    />
                        <span>{errors.password && errors.password.message}</span>
                        <label className="login__label">Пароль</label>
                    </div>

                    <Link className="login__link" to=''>
                        Не помню пароль
                    </Link>

                    <div className="login__btns">
                        <button type="submit" className="register__btn">
                            Войти в кабинет
                        </button>

                        <button onClick={() => navigate('/register')} type="button" className="register__btn">
                            Регистрация
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;
