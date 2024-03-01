import React from 'react';
import { useSelector } from 'react-redux';
import { HitsCards } from './HitsCards';
import { CatalogCards } from './CatalogCards';
import { CategoriesItems } from './CategoriesItems';

export const Hits = () => {
    const hits = useSelector((state) => state.addHits.hits);
    const catalog = useSelector((state) => state.catalog.catalog);
    const categories = useSelector((state) => state.categories.categories);

    return (
        <>
            <section className='top-sales'>
                <h2 className='text-center'>Хиты продаж!</h2>
                <div className='row'>
                    {hits.length !== 0 && hits.map((elem) => {
                            return <HitsCards data={elem} key={elem.id} />;
                        })}
                </div>
            </section>
            {catalog.length !== 0 && (
                <section className='catalog'>
                    <h2 className='text-center'>Каталог</h2>
                    <ul className='catalog-categories nav justify-content-center'>
                        <li className='nav-item'>
                            <a className='nav-link active' href='#'>
                                Все
                            </a>
                        </li>
                        {categories.map((elem) => {
                            return <CategoriesItems data={elem} key={elem.id}/>;
                        })}
                    </ul>
                    <div className='row'>
                        {catalog.map((elem) => {
                            return <CatalogCards data={elem} key={elem.id} />;
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
