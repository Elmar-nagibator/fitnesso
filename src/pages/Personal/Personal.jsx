import { useNavigate } from 'react-router-dom';
import './Personal.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { logOut, setUser  } from '../../store/redusers/user'; // Убедитесь, что путь правильный

const Personal = ({item}) => {
    const { status, user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Загрузка данных из db.json
        fetch('/path/to/db.json')
            .then(response => response.json())
            .then(data => {
                // Предполагается, что вы хотите получить первого пользователя
                dispatch(setUser (data.users[0])); // Используйте dispatch для обновления состояния
            })
            .catch(error => console.error('Ошибка при загрузке данных:', error));
    }, [dispatch]);

    return (
        <section className="personal">
            <div className="container">
                <h1 className="personal__title">Личный кабинет</h1>
                <hr className="personal__hr" />
                <div className="personal__block">
                    <div className="personal__box">
                        <h2 className="personal__box-title">Текущие заказы</h2>
                        <div className="personal__box-text">
                            <p className="personal__orderid-text">ID заказа: 12345</p>
                            <p className="personal__price-text">1000 руб.</p>
                        </div>
                        <p className="personal__text">Подробнее</p>
                    </div>
                    <div className="personal__box">
                        <h2 className="personal__box-title">История заказов</h2>
                        <div className="personal__box-text">
                            {/* Здесь можно добавить историю заказов */}
                        </div>
                        <p className="personal__text">Все заказы</p>
                    </div>
                    <div className="personal__box">
                        <h2 className="personal__box-title">Инструкции</h2>
                        <div className="personal__box-text">
                            <p className="personal__info-text">Инструкции по сборке и использованию приобретенных товаров</p>
                        </div>
                        <p className="personal__text">Подробнее</p>
                    </div>
                </div>
                <div className="personal__block2">
                    <h2 className="personal__block-title">{user?.name || 'Имя пользователя'}</h2>
                    <p className="personal__block1-text">{user?.email || 'Электронная почта'}</p>
                    {
                        status === 'success' ? (
                            <button onClick={() => dispatch(logOut(false))} className="personal__block-text">Выйти</button>
                        ) : (
                            <button onClick={() => navigate('/login')} className="personal__block-text">Войти</button>
                        )
                    }
                </div>
            </div>

        </section>
    );
};

export default Personal;