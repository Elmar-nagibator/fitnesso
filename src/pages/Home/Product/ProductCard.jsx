import React from 'react';
import './productCard.css'
import {HiOutlineShoppingBag} from "react-icons/hi2";
import rec from '../../../assets/Rectangle.png'
import {addBasket} from "../../../store/redusers/basket";
import {useDispatch} from "react-redux";
import { useNavigate} from 'react-router-dom';

const ProductCard = ({item}) => {
    const dispatch = useDispatch()
const navigate = useNavigate()
    return (
        <div className='productCard'>
            <img src={item.image} onClick={() => navigate(`/cardPage/${item.id}`)} alt="" className="productCard-img"/>
            <div className="productCard-block">
                <p className="productCard-green">Есть в наличии</p>
                <p className="productCard-text">{item.title}</p>
                <p className="productCard-reiting">Рейтинг</p>
                <div className="productCard-box">
                    <div className="productCard-col">
                        <p className="productCard-price">{item.price}₽</p>
                        <p className="productCard-not-price">{item.priceSale}</p>
                    </div>
                    <button className="productCard-btn" onClick={() => dispatch(addBasket({
                        id: item.id,
                        price: item.price
                    }))} >Купить <HiOutlineShoppingBag font-size='23px' />
                    </button>

                </div>
            </div>
            
        </div>
    );
};

export default ProductCard;