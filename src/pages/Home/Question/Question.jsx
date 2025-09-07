import React from 'react';
import './Question.css'
import { FaHandsHelping, FaArrowRight  } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiDumbbell } from "react-icons/ci";
import {useNavigate} from 'react-router-dom'

const Question = () => {
    const navigate = useNavigate()
    return (
      <section className="Question">
          <div className="container">
              <div className="Question__box">
                  <div className="Question__block">
                      <div className="Question__icons">
                      <FaHandsHelping className='Question__icon' />
                      </div>
                      <h1 className="Question__title">Помощь покупателю</h1>
                      <p className="Question__text">Узнайте как приобрести товар, способы доставки и оплаты, а также условия гарантии.</p>
                      <button onClick={() => navigate('/wallperis')} className="Question__btn">Подробнее <FaArrowRight  className='Question__btn' /> </button>
                  </div>
                  <div className="Question__block">
                      <div className="Question__icons">
                      <MdPhoneInTalk className='Question__icon' />
                      </div>
                      <h1 className="Question__title">Заявка на сервис</h1>
                      <p className="Question__text">Оставьте заявку на проведение гарантийного и постгарантийного ремонта.</p>
                      <button onClick={() => navigate('/wallperis')} className="Question__btn">Оставить заявку <FaArrowRight  className='Question__btn' /> </button>
                  </div>
                  <div className="Question__block">
                      <div className="Question__icons">
                      <HiOutlineUserCircle className='Question__icon' />
                      </div>
                      <h1 className="Question__title">Личный кабинет партнера B2B</h1>
                      <p className="Question__text">Личный кабинет дилера с доступом к информационным материалам</p>
                      <button onClick={() => navigate('/wallperis')} className="Question__btn">Стать партнером <FaArrowRight  className='Question__btn' /> </button>
                  </div>
                  <div className="Question__block">
                      <div className="Question__icons">
                      <CiDumbbell className='Question__icon' />
                      </div>
                      <h1 className="Question__title">Выставочный зал</h1>
                      <p className="Question__text">Оставьте заявку на посещение шоу-рума в Москве
                      </p>
                      <button onClick={() => navigate('/wallperis')} className="Question__btn">Записаться <FaArrowRight  className='Question__btn' /></button>
                  </div>
              </div>
          </div>
      </section>
    );
};

export default Question;