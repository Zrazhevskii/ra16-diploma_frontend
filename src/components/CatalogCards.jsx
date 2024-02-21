import React from 'react';
// import { useSelector } from 'react-redux';

export const CatalogCards = ({data}) => {
    // const catalogItems = useSelector((state) => state.catalog);
    // console.log(data)

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
