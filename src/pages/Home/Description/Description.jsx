import React from 'react';
import "./Description.css"
import img1 from "../../../assets/карта.png"
import {useNavigate} from "react-router-dom";

const Description = () => {
    const navigate = useNavigate()
    return (
       <section className="Description">
           <div className="container">
               <div className="Description__box">
                   <div className="Description__bloc1">
                       <h1 className="Description__title">О компании</h1>
                       <h2 className="Description__title2">Надежный партнер с 2005 года для сотен компаний от Калининграда до Владивостока.</h2>
                       <p className="Description__text">Оптима Импорт — один из самых крупных импортеров фитнес-оборудования, эксклюзивно представляет на российском рынке ведущих мировых производителей: Sole Fitness, Optima Fitness, Halley, Marcy, SKI Simulator и др.
                           <br/> <br/>
                           Мы предлагаем широкий спектр самой современной и качественной продукции как для домашнего, так и для коммерческого фитнеса.</p>
                       <button onClick={()=> navigate('/wallperis')} className="Description__btn">Подробнее о компании</button>

                   </div>
                   <div className="Description__bloc2">
                       <img className='Description__img'  src={img1} alt=""/>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default Description;