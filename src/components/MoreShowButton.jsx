import React from 'react';
import { fetchNullItems, fetchShowMoreProducts } from '../actions/actionsItems';
import { useDispatch, useSelector } from 'react-redux';

export const MoreShowButton = () => {
    const dispatch = useDispatch();
    const { allProducts } = useSelector((state) => state.bool);
    const actives = useSelector((state) => state.activeCategories)
    const { active } = actives;

    const handleShowMoreProducts = (e) => {
        e.preventDefault();
        dispatch(fetchShowMoreProducts(active));
        // dispatch(fetchNullItems(active))
    };

    // console.log(allProducts)

    return (
        !allProducts && (
            <div className='text-center'>
                <button
                    className='btn btn-outline-primary'
                    onClick={(e) => handleShowMoreProducts(e)}
                >
                    Загрузить ещё
                </button>
            </div>
        )
    );
};
