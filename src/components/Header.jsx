import React, { useEffect, useState } from 'react';
import logo from '../img/header-logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_FORM_VALUES } from '../actions/actions';
import { fetchCatalogItems } from '../actions/actionsItems';
import { activeCat } from '../store/ActiveCategories';
import { clearForm } from '../store/searchFormReduser';

export const Header = () => {
    const value = useSelector((state) => state.formvalues.value);
    const carts = useSelector((state) => state.cart);
    const { cart } = carts;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Visible, setVisible] = useState(true); //открытие/закрытие формы
    const [style, SetStyle] = useState(''); //красный шильдик на эмблеме корзины, появление/исчезание

    const hendleShowCatalog = () => {
        dispatch(clearForm());
        dispatch(fetchCatalogItems());
        dispatch(activeCat(11));
    };

    const searchForms = (e) => {
        dispatch({ type: ADD_FORM_VALUES, payload: e.target.value });
    };

    const classVisible = classNames({
        invisible: Visible,
    });

    const searchProdacts = () => {
        if (value.length > 0) {
            navigate('/catalog');
            setVisible(!Visible);
        } else if (!value) {
            setVisible(!Visible);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && value) {
            navigate('/catalog');
            setVisible(!Visible);
        }
    };

    useEffect(() => {
        if (cart.length) {
            SetStyle('header-controls-cart-full');
        } else {
            SetStyle('header-controls-cart-full invisible');
        }
    }, [cart]);

    const handleGoToCart = () => {
        navigate('/cart');
    };

    return (
        <>
            <header className='container'>
                <div className='row'>
                    <div className='col'>
                        <nav className='navbar navbar-expand-sm navbar-light bg-light'>
                            <NavLink
                                className='navbar-brand'
                                to='/'
                                onClick={hendleShowCatalog}
                            >
                                <img src={logo} alt='Bosa Noga' />
                            </NavLink>
                            <div
                                className='collapase navbar-collapse'
                                id='navbarMain'
                            >
                                <ul className='navbar-nav mr-auto'>
                                    <li className='nav-item'>
                                        <NavLink
                                            className='nav-link'
                                            to='/'
                                            onClick={hendleShowCatalog}
                                        >
                                            Главная
                                        </NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink
                                            className='nav-link'
                                            to='/catalog'
                                            onClick={hendleShowCatalog}
                                        >
                                            Каталог
                                        </NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink
                                            className='nav-link'
                                            to='/about'
                                        >
                                            О магазине
                                        </NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink
                                            className='nav-link'
                                            to='/contacts'
                                        >
                                            Контакты
                                        </NavLink>
                                    </li>
                                </ul>
                                <div>
                                    <div className='header-controls-pics'>
                                        <div
                                            data-id='search-expander'
                                            className='header-controls-pic header-controls-search'
                                            onClick={searchProdacts}
                                        ></div>
                                        {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                                        <div
                                            className='header-controls-pic header-controls-cart'
                                            onClick={handleGoToCart}
                                        >
                                            <div className={`${style}`}>
                                                {cart && cart.length}
                                            </div>
                                            <div className='header-controls-cart-menu'></div>
                                        </div>
                                    </div>
                                    <form
                                        data-id='search-form'
                                        className={`header-controls-search-form form-inline ${classVisible}`}
                                        onSubmit={(e) => handleSubmit(e)}
                                    >
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Поиск'
                                            value={value}
                                            onChange={(e) => searchForms(e)}
                                            onKeyDown={(e) => handleKeyPress(e)}
                                        />
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};
