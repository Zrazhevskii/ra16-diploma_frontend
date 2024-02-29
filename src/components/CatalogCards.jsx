import React from 'react';
import { NavLink } from 'react-router-dom';

export const CatalogCards = ({ data }) => {

    const { id, title, images, price } = data;

    return (
        <div className='col-4'>
            <div className='card catalog-item-card'>
                <img
                    src={images[0]}
                    className='card-img-top img-fluid'
                    alt={title}
                />
                <div className='card-body'>
                    <p className='card-text'>{title}</p>
                    <p className='card-text'>{price}.</p>
                    <NavLink
                        to={`/items/${id}`}
                        className='btn btn-outline-primary'
                    >
                        Заказать
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
