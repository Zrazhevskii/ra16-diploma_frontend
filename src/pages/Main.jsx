import React, { useEffect } from 'react';
import banner from '../img/banner.jpg';
import { useDispatch } from 'react-redux';
import { fetchHitsItems } from '../actions/actionsItems';
import { Outlet } from 'react-router-dom';

export const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHitsItems());
    }, []);

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
                    <Outlet/>                    
                </div>
            </div>
        </main>
    );
};
