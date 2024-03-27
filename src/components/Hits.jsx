import React from 'react';
import { useSelector } from 'react-redux';
import { HitsCards } from './HitsCards';
import { CatalogCards } from './CatalogCards';
import { CategoriesItems } from './CategoriesItems';
import { MoreShowButton } from './MoreShowButton';
import { LoaderMainPages } from './Loaders';

export const Hits = () => {
    const { catalog, loading } = useSelector((state) => state.catalog);
    const { hits, loadingHits } = useSelector((state) => state.addHits);

    return (
        <>
            {loadingHits ? (
                <section className='top-sales'>
                    <h2 className='text-center'>Хиты продаж!</h2>
                    <LoaderMainPages />
                </section>
            ) : (
                hits.length !== 0 && (
                    <section className='top-sales'>
                        <h2 className='text-center'>Хиты продаж!</h2>
                        <div className='row'>
                            {hits.map((elem) => {
                                return <HitsCards data={elem} key={elem.id} />;
                            })}
                        </div>
                    </section>
                )
            )}

            {loading ? (
                <section className='catalog'>
                    <h2 className='text-center'>Каталог</h2>
                    <LoaderMainPages />
                </section>
            ) : (
                catalog.length !== 0 && (
                    <section className='catalog'>
                        <h2 className='text-center'>Каталог</h2>
                        <CategoriesItems />
                        <div className='row'>
                            {catalog.map((item) => {
                                return (
                                    <CatalogCards data={item} key={item.id} />
                                );
                            })}
                        </div>
                        {loading && <LoaderMainPages />}
                        <MoreShowButton />
                    </section>
                )
            )}
        </>
    );
};
