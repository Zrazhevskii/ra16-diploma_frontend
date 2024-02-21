import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogItems } from '../actions/actionsItems';
import { CatalogCards } from '../components/CatalogCards';

export const Catalog = () => {
    const dispatch = useDispatch();
    const catalogItems = useSelector((state) => state.catalog)

    useEffect(() => {
        dispatch(fetchCatalogItems())
    }, [])

    return (
        <section className='catalog'>
            <h2 className='text-center'>Каталог</h2>
            <form class="catalog-search-form form-inline">
              <input class="form-control" placeholder="Поиск"/>
            </form>
            <ul className='catalog-categories nav justify-content-center'>
                <li className='nav-item'>
                    <a className='nav-link active' href='#'>
                        Все
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>
                        Женская обувь
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>
                        Мужская обувь
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>
                        Обувь унисекс
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>
                        Детская обувь
                    </a>
                </li>
            </ul>
            <div className='row'>
                {catalogItems.catalog.map((elem) => {
                    return <CatalogCards data={elem}/>
                })}
            </div>
            <div className='text-center'>
                <button className='btn btn-outline-primary'>
                    Загрузить ещё
                </button>
            </div>
        </section>
    );
};
