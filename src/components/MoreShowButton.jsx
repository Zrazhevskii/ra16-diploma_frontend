import React from 'react';
import { fetchShowMoreProducts } from '../actions/actionsItems';
import { useDispatch, useSelector } from 'react-redux';

export const MoreShowButton = () => {
    const dispatch = useDispatch();
    const boolItems = useSelector((state) => state.bool);
    const actives = useSelector((state) => state.activeCategories)
    const { active } = actives;
    const { allProducts } = boolItems;

    const handleShowMoreProducts = (e) => {
        e.preventDefault();
        dispatch(fetchShowMoreProducts(active));
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
