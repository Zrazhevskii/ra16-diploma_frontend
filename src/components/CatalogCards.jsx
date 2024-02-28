import React from 'react';
import { NavLink } from 'react-router-dom';

export const CatalogCards = ({data}) => {
    

    return (
        <div className='col-4'>
            <div className='card catalog-item-card'>
                <img
                    src={data.images[0]}
                    className='card-img-top img-fluid'
                    alt={data.title}
                />
                <div className='card-body'>
                    <p className='card-text'>{data.title}</p>
                    <p className='card-text'>{data.price}.</p>
                    <NavLink
                        to='/catalog/item'
                        className='btn btn-outline-primary'
                    >
                        Заказать
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
