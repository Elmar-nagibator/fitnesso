import React from 'react';
import './home.css'
import {Carousel} from './caousel/carousel'
import run from '../../assets/run.svg'
import red from '../../assets/redHome.svg'
import mask from '../../assets/Mask.svg'
import runClub from '../../assets/run-club.jpg'
import red2 from '../../assets/red2.svg'
import eges from '../../assets/egis.jpg'
import Atlet from "./Atlet/Atlet";
import Product from "./Product/Product";
import Brands from "./Brands/Brands";
import Question from "./Question/Question";
import Subscription from "./Subscription/Subscription";
import Fat from "./Fat/Fat";
import Description from "./Description/Description";
const Home = () => {
    return (
        <>
        <Carousel className='home' >
            <div className="item item-1">
                <div className="home-item">
                    <p className="home-text">Zero Runner</p>
                    <p className="home-tittle">Бег с нулевой <br/> ударной <br/> нагрузкой
                    </p>
                    <p className="home-span"> на суставы</p>
                    <button className="home-btn">Узнать больше</button>
                </div>
                <img src={run} alt="" className="home-one-img"/>
                <img src={red} alt="" className="home-red"/>
            </div>
            <div className="item item-2">
                <div className="home-item2">
                    <img src={mask} alt="" className="home__svg"/>
                    <p className="item2-text">Беговая дорожка</p>
                    <p className="item2-tittle">для подготовки к марафону</p>
                    <button className="item-btn">Подробнее</button>
                </div>
                <img src={runClub} alt="" className="home-item2-img"/>
                <img src={red2} alt="" className="home-red2"/>

            </div>
            <div className="item item-3">
                <div className="item3">
                    <p className="item3-text"><span className="item3-span">Well Fitness </span>
                         — надежный партнер с 2005 года для сотен компаний от Калининграда до Владивостока.
                    </p>
                </div>
                <img src={eges} alt="" className="item3-img"/>
            </div>

        </Carousel>
            <Atlet/>
            <Product/>
            <Fat/>


            <Brands/>
            <Question/>
            <Description/>
            <Subscription/>

        </>

    );
};

export default Home;