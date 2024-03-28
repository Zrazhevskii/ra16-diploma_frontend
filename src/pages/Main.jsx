import { useEffect } from 'react';
import banner from '../img/banner.jpg';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    fetchCatalogItems,
    fetchCategoriesItems,
    fetchHitsItems,
} from '../actions/actionsItems';
import { activeCat } from '../store/ActiveCategories';
import { localstorage } from '../store/CartReduser';

export const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHitsItems());
    }, [dispatch]);

    useEffect(() => {
        dispatch(activeCat(11));
        dispatch(fetchCategoriesItems());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCatalogItems());
    }, [dispatch]);

    useEffect(() => {
        dispatch(localstorage(JSON.parse(localStorage.getItem('cart'))));
    }, [dispatch]);

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
