import React from 'react';
import './Subscription.css'
import img1 from '../../../assets/ffd.png'
import {useNavigate} from 'react-router-dom'
const Subscription = () => {
    const navigate = useNavigate()
    return (
      <section className="Subscription">
          <div className="container">
              <div className="Subscription__box">
                  <div className="Subscription__box__img">
                      <img className='Subscription__img'  src={img1} alt=""/>
                  </div>
                  <div className="Subscription__block">
                      <h1 className="Subscription__title">Станьте нашим партнером
                          <span className="Subscription__span">
                           <br/> и получите возможность
                      </span>  представлять нашу продукцию в вашем регионе.</h1>
                      <button onClick={() => navigate('/wallperis')} className="Subscription__btn">Стать партнером</button>
                  </div>
              </div>
          </div>
      </section>
    );
};

export default Subscription;