import React from 'react';
import "./Brands.css"
import img1 from '../../../assets/Rectangle 166.png'
import img2 from '../../../assets/Rectangle 166 (1).png'
import img3 from '../../../assets/Rectangle 166 (2).png'
import img4 from '../../../assets/Rectangle 166 (3).png'
import img5 from '../../../assets/Rectangle 166 (4).png'
import img6 from '../../../assets/Rectangle 166 (5).png'
import img7 from '../../../assets/Rectangle 166 (6).png'
import img8 from '../../../assets/Rectangle 166 (7).png'
import img9 from '../../../assets/Rectangle 166 (8).png'
import img10 from '../../../assets/Rectangle 166 (9).png'
import img11 from '../../../assets/Rectangle 166 (10).png'
import img12 from '../../../assets/Rectangle 166 (11).png'
import img13 from '../../../assets/Rectangle 166 (12).png'
import img14 from '../../../assets/Rectangle 166 (13).png'
import img15 from '../../../assets/Rectangle 166 (14).png'

const Brands = () => {
    return (
        <section className="Brands">
            <div className="container">
                <h1 className="Brands__title">Популярные бренды</h1>
                <div className="Brands__box">
                    <p className="Brands__text">Беговые дорожки</p>
                    <p className="Brands__text">Эллиптические тренажеры</p>
                    <p className="Brands__text">Велотренажеры</p>
                    <p className="Brands__text">Силовые тренажеры</p>
                    <p className="Brands__text">Батуты</p>
                    <p className="Brands__text">Игровые столы</p>
                </div>
                <div className="Brands__block">
                    <div className="Brands__block__box"><img className='Brands__block__box__img' src={img1} alt=""/></div>
                    <div className="Brands__block__box"><img className='Brands__block__box__img' src={img2} alt=""/></div>
                    <div className="Brands__block__box"><img className='Brands__block__box__img' src={img3} alt=""/></div>
                    <div className="Brands__block__box"><img className='Brands__block__box__img' src={img4} alt=""/></div>
                    <div className="Brands__block__box"><img className='Brands__block__box__img' src={img5} alt=""/></div>
                    <div className="Brands__block__box"><img className='Brands__block__box__img' src={img6} alt=""/></div>
                    <div className="Brands__block__box"><img className='Brands__block__box__img' src={img7} alt=""/></div>
                    <div className="Brands__block__box"><img className='Brands__block__box__img' src={img8} alt=""/></div>
                    <div className="Brands__block__box"><img className='Brands__block__box__img' src={img9} alt=""/></div>
                    <div className="Brands__block__box"><img className='Brands__block__box__img' src={img10} alt=""/></div>
                    <div className="Brands__block__box"><img className='Brands__block__box__img' src={img11} alt=""/></div>
                    <div className="Brands__block__box"><img className='Brands__block__box__img' src={img12} alt=""/></div>
                    <div className="Brands__block__box"><img className='Brands__block__box__img' src={img13} alt=""/></div>
                    <div className="Brands__block__box"><img className='Brands__block__box__img' src={img14} alt=""/></div>
                    <div className="Brands__block__box"><img className='Brands__block__box__img' src={img15} alt=""/></div>
                </div>
            </div>
        </section>
    );
};

export default Brands;