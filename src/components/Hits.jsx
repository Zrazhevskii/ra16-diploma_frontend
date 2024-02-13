import React from 'react';
import { getHits } from '../api';

export const Hits = () => {
    const fullHits = getHits();

    // console.log(getHits());

    return (
        <section className='top-sales'>
            <h2 className='text-center'>Хиты продаж!</h2>
            <div className='row'>
                
            </div>
        </section>
    );
};
