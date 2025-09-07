import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClothes, changeFilterPrice, changeFilterPoint} from '../../store/redusers/clother';
import './Catalog.css';
import CardBlock from './CardBlock';


const Catalog = () => {
    const dispatch = useDispatch();
    const { data,filter } = useSelector(state => state.clother);

    useEffect(() => {
        dispatch(getClothes({ price: filter.price, point: filter.point })); // Передаем point
    }, [dispatch, filter.price, filter.point]); // Добавляем filter.point в зависимости

    return (
        <div>
            <section className="product">
                <div className="container">
                    <div className="filter">
                        <p className="filter-sort">Сортировать:</p>
                        <select className='select' value={filter.price} onChange={e => dispatch(changeFilterPrice(e.target.value))}>
                            <option value="default">По умолчанию</option>
                            <option value="asc">По возрастанию</option>
                            <option value="desc">По убыванию</option>
                        </select>
                        <p className="filter-point">Фильтр по типу:</p>
                        <select className='select' value={filter.point} onChange={e => dispatch(changeFilterPoint(e.target.value))}>
                            <option value="default">Все</option>
                            <option value="Домашние">Домашние</option>
                            <option value="Фитнес клуб">Фитнес клуб</option>
                        </select>
                    </div>
                    <div className="catalog__path">

                        {
                                data.map((item) => (
                                    <CardBlock className='product__path'  key={item.id} item={item}/>
                                ))
                        }

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Catalog;