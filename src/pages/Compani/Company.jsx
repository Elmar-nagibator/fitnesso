import React from 'react';
import eges from "../../assets/egis.jpg";
import './company.css'
import karta from '../../assets/karta.png'
import foto7 from '../../assets/Фото7.jpeg'
import foto8 from '../../assets/Фото8.jpg'
import foto9 from '../../assets/Фото9.jpg'
import foto10 from '../../assets/Фото10.jpeg'
import foto11 from '../../assets/фото11.jpg'
import foto12 from '../../assets/фото12.jpg'

const Company = () => {
    return (
        <div>
            <div className="container">
                <h2 className="company-tittle">О компании</h2>
                <div className="item item-3">
                    <div className="item3">
                        <p className="item3-text"><span className="item3-span">Well Fitness </span>
                            — надежный партнер с 2005 года для сотен компаний от Калининграда до Владивостока.
                        </p>
                    </div>
                    <img src={eges} alt="" className="item3-img"/>
                </div>
                <p className="company-text">За годы успешного развития нам удалось консолидировать в своем ассортименте
                    продукцию лучших мировых брендов, собрать команду профессионалов,
                    завоевать доверие десятков тысяч лояльных покупателей и стать настоящим лидером рынка.Так что
                    пакупайте у нас все качественно в лучшкм виде.Если хотите похудеть то купите наши беговые дорожки и
                    все будет безупречно.</p>
                <div className="company-num">
                    <div className="company-num__col">
                        <h2 className="company-num__tittle">2005</h2>
                        <div className="company-num__line"></div>
                        <p className="company-num__text">год появления на рынке</p>
                    </div>
                    <div className="company-num__col">
                        <h2 className="company-num__tittle">10 000+</h2>
                        <div className="company-num__line"></div>
                        <p className="company-num__text">складских помещений </p>
                    </div>
                    <div className="company-num__col">
                        <h2 className="company-num__tittle">60+</h2>
                        <div className="company-num__line"></div>
                        <p className="company-num__text">квалифицированных сотрудников</p>
                    </div>
                    <div className="company-num__col">
                        <h2 className="company-num__tittle">20+</h2>
                        <div className="company-num__line"></div>
                        <p className="company-num__text">ведущих мировых брендов</p>
                    </div>
                    <div className="company-num__col">
                        <h2 className="company-num__tittle">3000+</h2>
                        <div className="company-num__line"></div>
                        <p className="company-num__text">SKU</p>
                    </div>

                </div>

                <div className="company-karta__img">
                    <img src={karta} alt="" className="company-img"/>
                </div>
                <div className="company-block">
                    <h2 className="company-block__tittle">Мы сегодня – это:</h2>
                    <p className="company-block__text">слаженная команда людей, любящих спорт и здоровый образ жизни
                        знающих свое дело и ориентирующихся во всех нюансах фитнес оборудования;
                        широкая номенклатура качественной продукции ведущих мировых брендов с огромным выбором товаров в
                        наличии;
                        склад запчастей для обеспечения качественного сервиса и бесперебойной работы оборудования;
                        полный послепродажный сервис с информационной и технической поддержкой;
                        строгое соблюдение всех обязательств перед партнерами;
                        отличные цены и эксклюзивные условия для постоянных партнеров.</p>


                    <div className="company-block__img">
                        <img src={foto7} alt="" className="company-image"/>
                        <img src={foto8} alt="" className="company-image"/>
                        <img src={foto9} alt="" className="company-image"/>
                        <img src={foto10} alt="" className="company-image"/>
                    </div>

                    <h2 className="company-block__tittle">В чем причина нашего успеха?</h2>
                    <p className="company-block__text">Во-первых, мы особенно дорожим своей безупречной репутацией и
                        регулярно повышаем планку качества сервиса. Зная, насколько хрупким может оказаться доверие
                        покупателя, специалисты Well Fitness всегда ориентируются на интересы клиентов.
                        Во-вторых, мы поставляем только самую качественную и надежную продукцию. Перед выводом на
                        российский рынок, мы тщательно тестируем каждую модель, поэтому все предлагаемое оборудование
                        высоко ценится покупателями и имеет минимум сервисных проблем.
                        <br/> <br/>
                        На сегодняшний день в каталоге Well Fitness представлены лучшие мировые бренды спортивного
                        оборудования, среди которых Sole Fitness, Nautilus Fitness, Bowflex, CardioPower, PROSKI
                        Simulator, Eclipse и др. Продукция этих марок отличается безупречным балансом качества и
                        функциональности, возглавляет ведущие мировых рейтингах и пользуется доверием покупателей по
                        всему миру. Если вы ищете надежного поставщика спортивного оборудования - мы будем рады видеть
                        вас в числе наших партнеров и готовы предложить лучшие условия для выгодного дилерского
                        сотрудничества!</p>

                    <div className="company-box">
                        <img src={foto11} alt="" className="company-box__img"/>
                        <div className="company-box__col">
                            <p className="company-block__text">Значимость этих проблем настолько очевидна, что рамки и место обучения кадров требуют от нас анализа существенных финансовых и административных условий. С другой стороны начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. </p>
                        </div>
                    </div><div className="company-box">

                        <div className="company-box__col">
                            <p className="company-block__text">
                                На сегодняшний день в каталоге WellFitness представлены лучшие мировые бренды спортивного оборудования, среди которых Sole Fitness, Nautilus, Bowflex, CardioPower, PROSKI, Eclipse и др. Продукция этих марок отличается безупречным балансом качества и функциональности, возглавляет ведущие мировые рейтинги и пользуется доверием покупателей по всему миру. Если вы ищите надежного поставщика спортивного оборудования, мы будем рады видеть Вас в числе наших партнеров и готовы предложить лучшие условия для выгодного дилерского сотрудничества!</p>
                        </div>
                    <img src={foto12} alt="" className="company-box__img"/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Company;