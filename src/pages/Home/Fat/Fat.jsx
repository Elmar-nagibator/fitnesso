import React from 'react';
import './Fat.css'
import img1 from '../../../assets/13f65c137b08a17c00ca4c002649d88c8e211ceb_s2_n3_y2.jpg'
import img2 from '../../../assets/баннер 2 (1).png'
import img3 from '../../../assets/баннер 2.png'


const Fat = () => {
    return (
        <section className="fat">
            <div className="container">
                <h1 className="fat__title">
                    Идеи и подборки
                </h1>
                <div className="fat__box">
                    <img src={img1} alt="" className="fat__img"/>
                    <img src={img3} alt="" className="fat__img"/>
                    <img src={img2} alt="" className="fat__img"/>
                </div>
                <button className="fat__btn">
                    Полная подборка
                </button>
            </div>
        </section>
    );
};

export default Fat;