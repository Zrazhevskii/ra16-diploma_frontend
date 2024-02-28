import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCardItem } from '../actions/actionsItems';

export const CatalogCards = ({data}) => {
    const cardItems = useSelector((state) => state.card)
    const dispatch = useDispatch()

    const handleShowCard = (e) => {
        e.preventDefault();
        dispatch(fetchCardItem(data.id))
        // console.log(cardItems)
    }

    // console.log(cardItems)

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
                        to='/items'
                        className='btn btn-outline-primary'
                        // onClick={(e) => handleShowCard(e)}
                    >
                        Заказать
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
