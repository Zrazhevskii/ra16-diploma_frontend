import React from 'react';
import { fetchShowMoreProducts } from '../actions/actionsItems';
import { useDispatch, useSelector } from 'react-redux';

export const MoreShowButton = () => {
    const dispatch = useDispatch()
    const catalogItems = useSelector((state) => state.catalog);

    const { catalog, allProducts } = catalogItems
    // console.log(allProducts)

    const handleShowMoreProducts = (e) => {
        e.preventDefault();
        // console.log(catalogItems.length)
        dispatch(fetchShowMoreProducts(catalog.length))
    }

    return (
        !allProducts && <div className='text-center'>
            <button
                className='btn btn-outline-primary'
                onClick={(e) => handleShowMoreProducts(e)}
            >
                Загрузить ещё
            </button>
        </div>
    );
};
