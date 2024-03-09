import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HitsCards } from './HitsCards';
import { CatalogCards } from './CatalogCards';
import { CategoriesItems } from './CategoriesItems';
import {
    fetchCatalogItems,
    fetchCategoriesItems,
    fetchHitsItems,
} from '../actions/actionsItems';

export const Hits = () => {
    const hits = useSelector((state) => state.addHits.hits);
    const catalogItems = useSelector((state) => state.catalog.catalog);
    const categories = useSelector((state) => state.categories.categories);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchCatalogItems())
    // }, [])

    useEffect(() => {
        dispatch(fetchHitsItems());
    }, []);

    // useEffect(() => {
    //     dispatch(fetchCategoriesItems())
    // }, [])

    return (
        <>
            {hits.length !== 0 && (
                <section className='top-sales'>
                    <h2 className='text-center'>Хиты продаж!</h2>
                    <div className='row'>
                        {hits.map((elem) => {
                            return <HitsCards data={elem} key={elem.id} />;
                        })}
                    </div>
                </section>
            )}

            {catalogItems.length !== 0 && (
                <section className='catalog'>
                    <h2 className='text-center'>Каталог</h2>
                    <CategoriesItems />
                    <div className='row'>
                        {catalogItems.map((item) => {
                            return <CatalogCards data={item} key={item.id} />;
                        })}
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-outline-primary'>
                            Загрузить ещё
                        </button>
                    </div>
                </section>
            )}
        </>
    );
};
