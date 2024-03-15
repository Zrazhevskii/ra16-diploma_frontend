import React from 'react';
import { Basket } from '../components/Basket';
import { Order } from '../components/Order';
import { useSelector } from 'react-redux';

export const CartBasket = () => {
    const carts = useSelector((state) => state.cart);
    console.log(carts)

    return (
        <>
            <Basket/>
            <Order/>
        </>
    );
};
