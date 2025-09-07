import React from 'react';
import './card.css'
import BasketCard from "./BasketCard";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Card = ({item}) => {

    const navigate = useNavigate();

    const basket = useSelector(s => s.basket)
    const clothes = useSelector(s => s.clother)

    const dispatch = useDispatch()

    const newClothes = clothes.data.filter(item => basket.data.some(el => el.id === item.id))

    console.log(newClothes)
    return (
        <section>
            <div className="container">
                <h2 className="card-tittle">Моя корзина</h2>
                <div className="card">
                    <div className="card-block-tap">
                        {
                            newClothes.map((item) => (
                                <BasketCard item={item} key={item.id}/>
                            ))
                        }

                    </div>


            <div className="card-block">
                <div className="card-col">
                <div className="card-box">
                    <h2 className="card-box-tittle">Итого</h2>
                    <p className="card-box-tittle">{basket.data.reduce((acc,rec) => acc + rec.count * rec.price, 0)} ₽</p>
                </div>
                <div className="cardBlock-hr"></div>

                <button onClick={()=> navigate('/placing')} className="card-button">Перейти к оформлению</button>
                <button className="card-oneClick">Купить в 1 клик</button>
                <button className="card-oneClick">Сделать коммерческое предложение</button>
                </div>
            </div>
                </div>
            </div>
        </section>
    );
};

export default Card;