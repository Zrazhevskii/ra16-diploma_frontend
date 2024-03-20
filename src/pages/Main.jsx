import React, { useEffect } from 'react';
import banner from '../img/banner.jpg';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogItems, fetchCategoriesItems, fetchHitsItems } from '../actions/actionsItems';
import { activeCat } from '../store/ActiveCategories';
import { localstorage } from '../store/CartReduser';

export const Main = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)
    // console.log('localstorage', JSON.parse(localStorage.getItem('cart')));
    // console.log('корзина', cart)

    useEffect(() => {
        dispatch(fetchHitsItems())
    }, [])

    useEffect(() => {
        dispatch(activeCat(11))
        dispatch(fetchCategoriesItems())
    }, [])

    useEffect(() => {
            dispatch(fetchCatalogItems())
        }, [])

    useEffect(() => {
        // JSON.parse(localStorage.getItem('cart'))
            dispatch(localstorage(JSON.parse(localStorage.getItem('cart')) || []))
    }, [])

    console.log('localstorage', JSON.parse(localStorage.getItem('cart')));
    console.log('корзина', cart)

    return (
        <main className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='banner'>
                        <img
                            src={banner}
                            className='img-fluid'
                            alt='К весне готовы!'
                        />
                        <h2 className='banner-header'>К весне готовы!</h2>
                    </div>
                    <Outlet />
                </div>
            </div>
        </main>
    );
};
