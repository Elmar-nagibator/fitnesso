import React, {useEffect} from 'react';
import {Carousel} from './carusel/carusel'
import ProductCard from "./ProductCard";
import './Product'
import CardBlock from "../../Catalog/CardBlock";
import {useDispatch, useSelector} from "react-redux";
import {getClothes} from "../../../store/redusers/clother";

const Product = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.clother);

    useEffect(() => {
        dispatch(getClothes());
    }, [dispatch]);

    return (
        <>
        <Carousel className='product'>
            {
                data.map((item) => (
                    <ProductCard className='product__path'  key={item.id} item={item}/>
                ))
            }
        </Carousel>
        </>
    );
};

export default Product;