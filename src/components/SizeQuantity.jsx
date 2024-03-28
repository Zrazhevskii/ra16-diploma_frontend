import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCartProdact, updateCartProducts } from '../store/CartReduser';

export const SizeQuantity = () => {
    const { product } = useSelector((state) => state.card);
    const carts = useSelector((state) => state.cart);
    const { cart } = carts;
    const navi = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [rates, setRates] = useState(null);
    const { id, title, price, sizes } = product;

    const handleActiveRate = (num) => {
        setRates(num);
    };

    useEffect(() => {
        setQuantity(1);
    }, [rates]);

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
            id,
            title,
            rates,
            quantity,
            price,
            sum: price * quantity,
        };

        const index = cart.findIndex(
            (item) =>
                item.title === cartItem.title && item.rates === cartItem.rates
        );

        if (index !== -1) {
            let tem = {
                id,
                title,
                rates,
                quantity: cartItem.quantity + cart[index].quantity,
                price,
                sum: cartItem.sum + cart[index].sum,
            };

            navi('/cart');

            return dispatch(updateCartProducts(tem));
        }

        dispatch(addCartProdact(cartItem));

        localStorage.setItem('cart', JSON.stringify(cart));
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
                            let { size, available } = elem;
                            return (
                                available && (
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
                                )
                            );
                        })}
                </p>

                <p hidden={rates === null ? true : false}>
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
                disabled={rates === null ? true : false}
            >
                В корзину
            </button>
        </>
    );
};
