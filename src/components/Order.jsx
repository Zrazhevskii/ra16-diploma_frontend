import { useSelector, useDispatch } from 'react-redux';
import { fetchSetOrder } from '../actions/actionsItems';
import { addAdress, addPhone, changeAgreement } from '../actions/actions';

const validate = (phone) => {
    return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone);
};

export const Order = () => {
    const dispatch = useDispatch();
    const { phone, adress, agreement } = useSelector((state) => state.order);

    const cart = useSelector((state) => state.cart.cart);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleAgreement = () => {
        dispatch(changeAgreement());
    };

    const handlePhone = (value) => {
        dispatch(addPhone(value));
    };

    const handleAdress = (value) => {
        dispatch(addAdress(value));
    };

    const handleSetOrder = () => {
        if (phone.length === 0 || adress.length === 0)
            return dispatch(changeAgreement());

        const newOrder = {
            owner: {
                phone: phone,
                address: adress,
            },
            items: cart.map((elem) => ({
                id: elem.id,
                price: elem.price,
                count: elem.quantity,
            })),
        };

        if (validate(phone)) {
            dispatch(fetchSetOrder(newOrder));
            return;
        } else {
            alert('Номер телефона должен содержать только цифры');
        }
    };

    const divStyle = {
        maxWidth: '30rem',
        margin: '0 auto',
    };

    if (cart !== null) {
        return (
            <section className='order'>
                <h2 className='text-center'>Оформить заказ</h2>
                <div className='card' style={divStyle}>
                    <form
                        className='card-body'
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <div className='form-group'>
                            <label htmlFor='phone'>Телефон</label>
                            <input
                                className='form-control'
                                id='phone'
                                placeholder='Ваш телефон'
                                value={phone}
                                onChange={(e) => handlePhone(e.target.value)}
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
                            <label
                                className='form-check-label'
                                htmlFor='agreement'
                            >
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
    }
};
