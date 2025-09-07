import React from 'react';
import './atlet.css'
import {useNavigate} from 'react-router-dom'
const Atlet = () => {
    const navigate = useNavigate()
    return (
        <section className='atlet'>
            <div className="container">
                <div className="atlet-block">
                    <div onClick={()=> navigate('/catalog')} className="home-fit"><p className="atlet-fit-text">Тренажеры <br/> для дома</p></div>
                    <div onClick={()=> navigate('/catalog')} className="club-fit"><p className="atlet-club-text">Для фитнес <br/> клубов</p></div>
                </div>
            </div>

        </section>
    );
};

export default Atlet;