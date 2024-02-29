import React, { useState } from 'react';
import logo from '../img/header-logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_FORM_VALUES } from '../actions/actions';

export const Header = () => {
    const formValue = useSelector((state) => state.formvalues);
    const { value } = formValue;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Visible, setVisible] = useState(true);

    const searchForms = (e) => {
        e.preventDefault();

        dispatch({ type: ADD_FORM_VALUES, payload: e.target.value });
    };

    const classVisible = classNames({
        invisible: Visible,
    });

    const searchProdacts = () => {
        if (value) {
            navigate('/catalog');
            setVisible(!Visible);
        } else if (!value) {
            setVisible(!Visible);
        }
    };

    return (
        <>
            <header className='container'>
                <div className='row'>
                    <div className='col'>
                        <nav className='navbar navbar-expand-sm navbar-light bg-light'>
                            <NavLink className='navbar-brand' to='/'>
                                <img src={logo} alt='Bosa Noga' />
                            </NavLink>
                            <div
                                className='collapase navbar-collapse'
                                id='navbarMain'
                            >
                                <ul className='navbar-nav mr-auto'>
                                    <li className='nav-item'>
                                        <NavLink className='nav-link' to='/'>
                                            Главная
                                        </NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink
                                            className='nav-link'
                                            to='/catalog'
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
                                            onClick={() => searchProdacts()}
                                        ></div>
                                        {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                                        <div className='header-controls-pic header-controls-cart'>
                                            <div className='header-controls-cart-full invisible'></div>
                                            <div className='header-controls-cart-menu'></div>
                                        </div>
                                    </div>
                                    <form
                                        data-id='search-form'
                                        className={`header-controls-search-form form-inline ${classVisible}`}
                                    >
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Поиск'
                                            value={value}
                                            onChange={(e) => searchForms(e)}
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
