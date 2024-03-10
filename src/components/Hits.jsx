import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HitsCards } from './HitsCards';
import { CatalogCards } from './CatalogCards';
import { CategoriesItems } from './CategoriesItems';
import { MoreShowButton } from './MoreShowButton';

export const Hits = () => {
    const hits = useSelector((state) => state.addHits.hits);
    const catalogItems = useSelector((state) => state.catalog.catalog);

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
                    <MoreShowButton />
                </section>
            )}
        </>
    );
};
