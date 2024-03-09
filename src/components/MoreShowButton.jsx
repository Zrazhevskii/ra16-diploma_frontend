import React from 'react';
import { fetchShowMoreProducts } from '../actions/actionsItems';

export const MoreShowButton = () => {

    const handleShowMoreProducts = (e) => {
        e.preventDefault();
        // console.log('я тут')
        dispatch(fetchShowMoreProducts())
    }

    return (
        <div className='text-center'>
            <button
                className='btn btn-outline-primary'
                onClick={(e) => handleShowMoreProducts(e)}
            >
                Загрузить ещё
            </button>
        </div>
    );
};
