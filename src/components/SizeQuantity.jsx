import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCartProdact } from '../store/CartReduser';

export const SizeQuantity = () => {
    const { product } = useSelector((state) => state.card);
    const carts = useSelector((state) => state.cart);
    const navi = useNavigate();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    const [rates, setRates] = useState(0);

    const { title, price, sizes, } = product;

    const handleActiveRate = (num) => {
        setRates(num);
    };

    const handleQuantity = (e) => {
        if (quantity === 0) {
            alert('Нельзя заказать меньше одной пары((');
            setQuantity(1);
        } else if (quantity === 11) {
            alert('Ой, а больше 10 пар и нет');
            setQuantity(10);
        } else if (e.target.value === '-') {
            setQuantity(quantity - 1);
        } else if (e.target.value === '+') {
            setQuantity(quantity + 1);
        }
    };

    const handleCart = () => {
        const cartItem = {
            title,
            rates,
            quantity,
            price,
            sum: price * quantity,
        };

        dispatch(addCartProdact(cartItem));

        // if (carts.length > 1) {

        // }

        navi('/cart');
    };

    // console.log(carts)

  return (
    <>
        <div className='text-center'>
                        <p>
                            {' '}
                            Размеры в наличии:
                            {sizes &&
                                sizes.map((elem) => {
                                    return (
                                        <span
                                            className={
                                                elem.size === rates
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
                        <p>
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
                    {rates === 0 ? (
                        <span></span>
                    ) : (
                        <button
                            className='btn btn-danger btn-block btn-lg'
                            onClick={handleCart}
                        >
                            В корзину
                        </button>
                    )}
    </>
  )
}
