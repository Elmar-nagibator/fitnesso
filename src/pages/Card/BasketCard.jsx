import React ,{useState}from 'react';
import './card.css'
import bas from '../../assets/bas.jpg'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import {addBasket, removeBasket, removeBasketAlone} from "../../store/redusers/basket";
import {useDispatch, useSelector} from "react-redux";

const BasketCard = ({item}) => {
    const [num,setNumber] = useState(1)

    const dispatch = useDispatch()

    const basket = useSelector(s => s.basket)

    return (
        <div className='BasketCard'>
            <img className='BasketCard-img' src={item.image} alt=""/>
            <div className="cardBlock-block">
                <div className="cardBlock-box">
                    <h2 className="BasketCard-title">{item.title}</h2>
                </div>
                <div className="cardBlock-hr"></div>
                <div className="BasketCard-bottom">
                    <div className="BasketCard-core">
                        <p className="BasketCard-topText">Цвет</p>
                        <p className="BasketCard-bottomBtn">{item.color}</p>
                    </div>
                    <div className="cBasketCard-core">
                        <p className="BasketCard-topText">Размер, см</p>
                        <p className="BasketCard-bottomBtn">1500 × 2000  </p>
                    </div>
                    <div className="BasketCard-core">
                        <p className="BasketCard-topText">Вес стека, г</p>
                        <p className="BasketCard-bottomBtn">{item.kg}</p>
                    </div>
                </div>
            </div>

            <div className="BasketCard-col">
                <CiCirclePlus font-size='28px' color='rgb(133, 143, 164)' onClick={() => dispatch(addBasket({
                    id: item.id,
                    price: item.price
                }))} />
                <h2 className='BasketCard-num'>	{basket.data.find(el => el.id === item.id).count}</h2>
                <CiCircleMinus font-size='28px' color='rgb(133, 143, 164)' 	onClick={() => dispatch(removeBasket(item.id))}/>
            </div>
            <div className="BasketCard-core">
                <p className="BasketCard-text-price">{item.price} ₽</p>
                <p className="BasketCard-text-price-not">{item.priceSale} ₽</p>
            </div>
            <div onClick={() => dispatch(removeBasketAlone(item.id))} className="BasketCard-obs">
                <p className="BasketCard-obs-text">удалить</p>
            <MdDeleteOutline     color= 'rgb(144, 156, 181)' font-size='24px'
            />
        </div>
        </div>
    );
};

export default BasketCard;