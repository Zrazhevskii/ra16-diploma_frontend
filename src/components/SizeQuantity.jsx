import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    addCartProdact,
    updateCartProducts,
} from '../store/CartReduser';


export const SizeQuantity = () => {
    const { product } = useSelector((state) => state.card);
    const carts = useSelector((state) => state.cart);
    const { cart } = carts;
    const navi = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [rates, setRates] = useState(0);
    const { title, price, sizes } = product;

    const handleActiveRate = (num) => {
        setRates(num);
    };

    
    const handleQuantity = (e) => {
        if (quantity === 0) {
            alert('Нельзя заказать меньше одной пары((');
            setQuantity(1);
        } else if (quantity === 11) {
            alert('Ой, а больше 10 пар и нет в наличии');
            setQuantity(10);
        } else if (e.target.value === '-') {
            setQuantity(quantity - 1);
        } else if (e.target.value === '+') {
            setQuantity(quantity + 1);
        }
    };

    const handleCart = () => {
        let cartItem = {
            id: crypto.randomUUID(),
            title,
            rates,
            quantity,
            price,
            sum: price * quantity,
        };

        const found = cart.some(
            (elem) =>
                elem.title === cartItem.title && elem.rates === cartItem.rates
        );

        if (found) {
            cart.map((item) => {
                
                if (
                    item.title === cartItem.title &&
                    item.rates === cartItem.rates
                ) {
                    let tem = {
                        id: crypto.randomUUID(),
                        title,
                        rates,
                        quantity: cartItem.quantity + item.quantity,
                        price,
                        sum: cartItem.sum + item.sum,
                    };

                    return dispatch(updateCartProducts(tem));
                }
            });
        } else {
            dispatch(addCartProdact(cartItem));
        }

        navi('/cart');
    };

    return (
        <>
            <div className='text-center'>
                <p>
                    {' '}
                    Размеры в наличии:
                    {sizes &&
                        sizes.map((elem) => {
                            let { size, available } = elem
                            return (
                                <span
                                    className={
                                        size === rates && available
                                            ? 'catalog-item-size selected'
                                            : 'catalog-item-size'
                                    }
                                    key={elem.size}
                                    onClick={() => {
                                        handleActiveRate(elem.size);
                                    }}
                                >
                                    {elem.size}
                                </span>
                            );
                        })}
                </p>
                <p hidden={rates === 0 ? true : false}>
                    Количество:
                    <span className='btn-group btn-group-sm pl-2'>
                        <button
                            className='btn btn-secondary'
                            value='-'
                            onClick={(e) => handleQuantity(e)}
                        >
                            -
                        </button>
                        <span className='btn btn-outline-primary'>
                            {quantity}
                        </span>
                        <button
                            className='btn btn-secondary'
                            value='+'
                            onClick={(e) => handleQuantity(e)}
                        >
                            +
                        </button>
                    </span>
                </p>
            </div>

            <button
                className='btn btn-danger btn-block btn-lg'
                onClick={handleCart}
                disabled={rates === 0 ? true : false}
            >
                В корзину
            </button>
        </>
    );
};
