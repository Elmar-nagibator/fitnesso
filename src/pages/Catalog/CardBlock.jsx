import React, {useEffect, useState} from 'react';
import './card.css'
import {HiOutlineShoppingBag} from "react-icons/hi2";
import { useNavigate} from 'react-router-dom';

import {addBasket, removeBasket, removeBasketAlone} from "../../store/redusers/basket";
import {useDispatch, useSelector} from "react-redux";

const CardBlock = ({item}) => {


    const dispatch = useDispatch()

    const basket = useSelector(s => s.basket)
    const navigate = useNavigate();

    return (
        <div className='cardBlock'>
            <div className="cardBlock-img-1">
                <img className='cardBlock-img' onClick={() => navigate(`/cardPage/${item.id}`)} src={item.image} alt=""/>
            </div>
            <div className="cardBlock-block">
                <div className="cardBlock-box">
                    <h2 className="cardBlock-title">{item.title}</h2>
                </div>
                <div className="cardBlock-hr"></div>
                <div className="cardBlock-bottom">
                    <div className="cardBlock-core">
                        <p className="cardBlock-topText">Цвет</p>
                        <p className="cardBlock-bottomBtn"> {item.color} </p>

                    </div><div className="cardBlock-core">
                        <p className="cardBlock-topText">Назначение</p>
                        <p className="cardBlock-bottomBtn"> {item.point} </p>

                    </div>

                    <div className="cardBlock-core">
                        <p className="cardBlock-topText">Вес стека</p>
                        <p className="cardBlock-bottomBtn">{item.kg} кг</p>
                    </div>
                </div>
            </div>


            <div className="cardBlock-close">
            <div className="cardBlock-price">
                <p className="cardBlock-text-price">{item.price}₽</p>
                <p className="cardBlock-text-price-not">{item.priceSale}</p>
            </div>
                <button onClick={() => dispatch(addBasket({
                    id: item.id,
                    price: item.price
                }))} className="cardBlock-btn"><HiOutlineShoppingBag font-size='20px'/>Купить</button>
        </div>
        </div>
    );
};

export default CardBlock;

