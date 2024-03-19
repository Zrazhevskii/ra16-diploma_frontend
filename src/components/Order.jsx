import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAdress, addPhone, changeAgreement } from '../store/OrderReduser';

const validate = (string) => {
    return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(string)
}

export const Order = () => {
    const dispatch = useDispatch();
    const { phone, adress, agreement, loading, error } = useSelector(
        (state) => state.order
    );

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleAgreement = () => {
        dispatch(changeAgreement());
    };

    const handlePhone = (e) => {
        dispatch(addPhone(e.target.value));

    };

    const handleAdress = (e) => {
        dispatch(addAdress(e.target.value));
    };

    const handleSetOrder = () => {
        if (phone.length === 0 || adress.length === 0) return dispatch(changeAgreement());

        if (validate(phone)) {

            return 
        } else {
            alert('Номер телефона должен содержать только цифры')
        }
    };

    const divStyle = {
        maxWidth: '30rem',
        margin: '0 auto',
    };
    return (
        <section className='order'>
            <h2 className='text-center'>Оформить заказ</h2>
            <div className='card' style={divStyle}>
                <form className='card-body' onSubmit={(e) => handleSubmit(e)}>
                    <div className='form-group'>
                        <label htmlFor='phone'>Телефон</label>
                        <input
                            className='form-control'
                            id='phone'
                            placeholder='Ваш телефон'
                            value={phone}
                            onChange={(e) => handlePhone(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='address'>Адрес доставки</label>
                        <input
                            className='form-control'
                            id='address'
                            placeholder='Адрес доставки'
                            value={adress}
                            onChange={(e) => handleAdress(e.target.value)}
                        />
                    </div>
                    <div className='form-group form-check'>
                        <input
                            type='checkbox'
                            className='form-check-input'
                            id='agreement'
                            checked={agreement}
                            onChange={handleAgreement}
                        />
                        <label className='form-check-label' htmlFor='agreement'>
                            Согласен с правилами доставки
                        </label>
                    </div>
                    <button
                        type='submit'
                        className='btn btn-outline-secondary'
                        disabled={!agreement}
                        onClick={handleSetOrder}
                    >
                        Оформить
                    </button>
                </form>
            </div>
        </section>
    );
};
