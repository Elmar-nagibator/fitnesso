import React, {useEffect, useState} from 'react';
import './header.css'
import Modal from "./Modal/Modal";
import {LuSearch} from "react-icons/lu";
import {HiOutlineShoppingBag} from "react-icons/hi2";
import {IoMdHeartEmpty} from "react-icons/io";
import {RxAvatar} from "react-icons/rx";
import {HiOutlineSquares2X2} from "react-icons/hi2";
import {IoClose} from "react-icons/io5";
import {FcGoogle} from "react-icons/fc";
import {FaFacebook} from "react-icons/fa6";
import {Link, Navigate, useNavigate} from 'react-router-dom';
import Register from "../../../pages/Register/Register";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../../store/redusers/user";
import {useForm} from "react-hook-form";
import {loginUser} from "../../../store/redusers/user";
import HeaderSvg from "./HeaderSvg";
import HeaderBasket from "./HeaderBasket";

const Header = ({item}) => {

    const {user, setUser} = useSelector(state => state.user);
    useEffect(() => {
        // Загрузка данных из db.json
        fetch('/path/to/db.json')
            .then(response => response.json())
            .then(data => {
                // Предполагается, что вы хотите получить первого пользователя
                setUser (data.users[0]);
            })
            .catch(error => console.error('Ошибка при загрузке данных:', error));
    }, []);

    const [modalActive, setModalActive] = useState(false)
    const [colModal, setColModal] = useState(false)
    const handleOpenRegistration = () => {
        setModalActive(false);
        setColModal(true);
    };

    const {status} = useSelector((state) => state.user)
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: "onChange",
    });





    return (
        <header className='header'>
            <div className="container">
                <div className="header__div">
                    <div className="header-box">
                        <HeaderSvg/>

                        <button onClick={() => navigate('/catalog')} className="header__div__btn">Каталог <HiOutlineSquares2X2
                            font-size='23px'/></button>
                        <LuSearch font-size='23px' color='rgba(133, 143, 164, 0.7)'/>
                    </div>
                    <ul className="header__div__col">
                        {[ 'Сервис', 'Услуги', 'Поддержка', 'Блог', 'Контакты'].map((item, index) => (
                            <li onClick={() => navigate('/wallperis')} key={index}
                                className="header__div__col__list">{item}</li>
                        ))}

                        <li onClick={() => navigate('/brend')} className="header__div__col__list">Бренды</li>
                        <li onClick={() => navigate('/company')} className="header__div__col__list">О компании</li>
                        <li onClick={() => navigate('/buy')} className="header__div__col__list">Где купить</li>

                        <p onClick={() => navigate('/login')} className="header-import">{user?.name || 'Войти'}</p>

                    </ul>
                    <div className="header-svg">
                        <HeaderBasket/>

                        <IoMdHeartEmpty onClick={() => navigate('/wallperis')} font-size='23px'
                                        color='rgb(255, 255, 255)'/>
                        <RxAvatar onClick={() => navigate('/personal')} font-size='23px' color='rgb(255, 255, 255)'/>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;