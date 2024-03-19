import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletProductCart } from '../store/CartReduser';

export const Basket = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state.cart);
    let num = 0;
    let newAllSum = 0;

    const handleDeletProduct = ( id) => {
        dispatch(deletProductCart(id))
    }

    return (
        <section className='cart'>
            <h2 className='text-center'>Корзина</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Название</th>
                        <th scope='col'>Размер</th>
                        <th scope='col'>Кол-во</th>
                        <th scope='col'>Стоимость</th>
                        <th scope='col'>Итого</th>
                        <th scope='col'>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {cart &&
                        cart.map((elem) => {
                            const { id, title, price, rates, quantity, sum } = elem;
                            newAllSum = newAllSum + sum;
                            return (
                                <tr key={num++}>
                                    <td scope='row'>{num + 1}</td>
                                    <td>
                                        <a href='#'>{title}</a>
                                    </td>
                                    <td>{rates}</td>
                                    <td>{quantity} шт.</td>
                                    <td>{price} руб.</td>
                                    <td>{sum} руб.</td>
                                    <td>
                                        <button className='btn btn-outline-danger btn-sm' onClick={() => handleDeletProduct(id)}>
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}

                    <tr>
                        <td colSpan='5' className='text-right'>
                            Общая стоимость: {newAllSum}
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};
