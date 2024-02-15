import React, { useEffect } from 'react';
import banner from '../img/banner.jpg';
import { Hits } from '../components/Hits';
import { Catalog } from './Catalog';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHitsItems } from '../actions/actionsItems';

export const Main = () => {
    const hitsItems = useSelector((state) => state.addHits);
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
                    {hitsItems.length !== 0 && <Hits />}
                    <Catalog />
                </div>
            </div>
        </main>
    );
};
