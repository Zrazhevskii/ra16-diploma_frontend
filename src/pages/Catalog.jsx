import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogItems } from '../actions/actionsItems';
import { CatalogCards } from '../components/CatalogCards';
import { CategoriesItems } from '../components/CategoriesItems';
import { clearCatalogs } from '../store/CatalogReduser';
import { ADD_CATALOG_SUCCES } from '../actions/actions';

export const Catalog = () => {
    const value = useSelector((state) => state.formvalues.value);
    const dispatch = useDispatch();
    const catalogItems = useSelector((state) => state.catalog)
    const categories = useSelector((state) => state.categories.categories);

    useEffect(() => {
        dispatch(fetchCatalogItems())
    }, [catalogItems])

    const handleSearch = (e) => {
        dispatch({type: ADD_CATALOG_SUCCES, payload: e.target.value})
        dispatch(clearCatalogs())
    }

    // console.log(catalogItems)

    return (
        <section className='catalog'>
            <h2 className='text-center'>Каталог</h2>
            <form className="catalog-search-form form-inline">
              <input className="form-control" placeholder="Поиск"  value={value} onChange={(e) => handleSearch(e)}/>
            </form>
            <ul className='catalog-categories nav justify-content-center'>
                <li className='nav-item'>
                    <a className='nav-link active' href='#'>
                        Все
                    </a>
                </li>
                {categories.map((elem) => {
                    return <CategoriesItems data={elem}/>
                })}
            </ul>
            <div className='row'>
                {catalogItems.catalog.map((elem) => {
                    return <CatalogCards data={elem} />
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
