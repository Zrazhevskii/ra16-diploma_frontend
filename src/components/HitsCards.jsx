import React from 'react';
import { NavLink } from 'react-router-dom';

export const HitsCards = ({ data }) => {
    // console.log(data.images);
    return (
        <div className='col-4'>
            <div className='card'>
                <img
                    src={data.images[0]}
                    className='card-img-top img-fluid'
                    alt={data.title}
                />
                <div className='card-body'>
                    <p className='card-text'>{data.title}</p>
                    <p className='card-text'>{data.price}</p>
                    <a
                        href='/products/1.html'
                        className='btn btn-outline-primary'
                    >
                        Заказать
                    </a>
                </div>
            </div>
        </div>
    );
};
