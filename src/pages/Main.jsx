import React, { useEffect } from 'react';
import banner from '../img/banner.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesItems, fetchHitsItems } from '../actions/actionsItems';
import { Outlet } from 'react-router-dom';

export const Main = () => {
    const dispatch = useDispatch();
    const categoriesItems = useSelector((state) => state.categories);
    const { categories } = categoriesItems

    useEffect(() => {
        dispatch(fetchCategoriesItems());
    }, []);

    useEffect(() => {
        dispatch(fetchHitsItems());
    }, []);

    // console.log(categories);

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
