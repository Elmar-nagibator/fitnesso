import React from 'react';
import buyBlock from '../../assets/buyBack.png'
import './buy.css'

const Buy = () => {
    const item = [ '', '', '', '', 'Wellgallery']
    const text = [ '', ' ', '', '']
    const num = ['', '', '', 'www.wellgallery.ru']
    return (
        <div>
            <div className="container">
                <h2 className="buy-title">Фирменный магазин Well Fitness</h2>
                <div className="buy-block">
                    <div className="buy-block-box">
                        <h2 className="buy-block-title">Москва, ТРК VEGAS Крокус Сити,<br/>
                            м. Мякинино, ул. Международная 12,<br/>
                            66 км МКАД</h2>
                        <p className="buy-block-num">10:00 - 21:00</p>
                        <p className="buy-block-text">+7 (499) 677-56-32 доб. 1</p>
                    </div>

                    <div className="buy-block-back">
                        <img src={buyBlock} alt="" className="buy-img"/>
                    </div>
                </div>
                <h2 className="buy-title">Магазины партнеров</h2>
                <div className="buy-global">
                    <div className="buy-global-col">

                            <h2 className="buy-global-title">Спорт Дома</h2>
                            <p className="buy-global-text">м. Мякинино, ул.Международная12, 10:00 - 21:00</p>
                            <p className="buy-global-text">+7 (499) 677-56-32 доб. 1</p>


                    </div>
                    <div className="buy-global-col">

                            <h2 className="buy-global-title">Тренмаркет.ру</h2>
                            <p className="buy-global-text">Ленинский пр-т, 99 10:00 - 21:00', 'Сколковское шоссе, 31, 10:00 - 21:00</p>
                            <p className="buy-global-text">www.wellgallery.ru</p>


                    </div>
                    <div className="buy-global-col">

                            <h2 className="buy-global-title">Goldgum</h2>
                            <p className="buy-global-text">м. Румянцево, БП "Румянцево", блок Д, 1 этаж 10:00 - 21:00</p>
                            <p className="buy-global-text">+7 (499) 677-56-32 доб. 1</p>


                    </div>
                    <div className="buy-global-col">

                            <h2 className="buy-global-title">Sportpremier</h2>
                            <p className="buy-global-text">Новорижское шоссе, 5 км от МКАД, ТРК "Рига Молл" 3 этаж10:00 - 21:00</p>
                            <p className="buy-global-text">+7 (499) 677-56-32 доб. 1</p>


                    </div>
                    <div className="buy-global-col">

                            <h2 className="buy-global-title">Wellgallery</h2>
                            <p className="buy-global-text">Калужское шоссе, 1 км от МКАД, ТЦ "Славянский Град" 1 этаж 10:00 - 21:00</p>
                            <p className="buy-global-text">www.wellgallery.ru</p>


                    </div>
                    <div className="buy-global-col">

                            <h2 className="buy-global-title">GorFitness</h2>
                            <p className="buy-global-text">Калужское шоссе, где-то далеко за горами 100 этаж 11:11 - 22:22</p>
                            <p className="buy-global-text">www.gorfitness.ru</p>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Buy;