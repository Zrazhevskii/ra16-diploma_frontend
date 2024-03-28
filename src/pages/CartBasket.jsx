import { useEffect } from 'react';
import { Basket } from '../components/Basket';
import { Order } from '../components/Order';
import { useDispatch, useSelector } from 'react-redux';
import { HalfMalf } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css';
import { Error } from '../components/Error';
import { localstorage } from '../actions/actions';

export const CartBasket = () => {
    const { cart } = useSelector((state) => state.cart);
    const { loading, error } = useSelector((state) => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(localstorage(JSON.parse(localStorage.getItem('cart'))));
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    if (loading) {
        return (
            <HalfMalf
                text={'Отправляем заказ...'}
                center={true}
                width={'150px'}
                height={'150px'}
            />
        );
    }

    if (error) {
        return (
            <Error
                text={
                    'Ой, что-то в корзине сломалось, мы сохраним выбранные товары, перезрузите страницу'
                }
            />
        );
    }

    return (
        <>
            <Basket />
            <Order />
        </>
    );
};
