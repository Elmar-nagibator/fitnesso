import React, {useEffect, useState} from 'react';
import './Cardpage.css'
import  star from '../../assets/star.svg'
import im from '../../assets/фото11.jpg'
import {HiOutlineShoppingBag} from "react-icons/hi2";
import axios from "axios";
import {loginUser} from "../../store/redusers/user";
import { useParams} from 'react-router-dom'
import {addBasket} from "../../store/redusers/basket";
import {useDispatch} from "react-redux";

const CardPage = () => {
const [product,setProduct] = useState({})
    const dispatch = useDispatch()

    const params = useParams()
    useEffect( ()=>{
        axios(`http://localhost:8080/clother/${params.id}`)
            .then((res)=> setProduct(res.data), )

            .catch((err) => console.log(err))
    } ,[])
    if ('id' in product) {
    return (
        <section className='cardPage-section'>
            <div className="container">
                <h2 className="cardPage-title">{product.title}</h2>
                <div className="cardPage">
                    <div className="cardPage-img-box">
                        <img src={`../${product.image}`} alt="" className="cardPage-img"/>
                    </div>
                    <div className="cardPage-block">
                        <div className="cardPage-col">
                            <p className="cardPage-text">назначение <span className='cardPage-span'>{product.point}</span></p>
                            <p className="cardPage-text">вес <span className='cardPage-span'>{product.kg}кг</span></p>
                            <p className="cardPage-text">цвет <span className='cardPage-span'>{product.color}</span></p>
                            <p className="cardPage-text">гарантия на <span className='cardPage-span'>2 года</span></p>
                            <p className="cardPage-text">качество <img src={star} alt=""/></p>
                            <p className="cardPage-text"> цена <img src={star} alt=""/></p>
                            <p className="cardPage-text">функцианальность <img src={star} alt=""/></p>
                            <p className="cardPage-text"> комфорт <img src={star} alt=""/></p>
                            <p className="cardPage-text"> обший рейтинг <img src={star} alt=""/></p>

                        </div>
                        <div className="cardPage-row">
                            <p className="cardPage-price">{product.price} ₽</p>
                            <div className="cardPage-hr"></div>
                            <button className='cardBlock-btn butt' onClick={() => dispatch(addBasket({
                                id: product.id,
                                price: product.price
                            }))}><HiOutlineShoppingBag font-size='20px'/> купить</button>
                        </div>
                    </div>

                </div>
            </div>

        </section>

)
} else {
    return (
        <div className='notfound'>
            <h1 className='notfound__title'>Страница не найдена</h1>
        </div>
    )
}
};

export default CardPage;