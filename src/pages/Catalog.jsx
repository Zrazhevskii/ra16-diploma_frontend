import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogItems, fetchSearchCards } from '../actions/actionsItems';
import { CatalogCards } from '../components/CatalogCards';
import { CategoriesItems } from '../components/CategoriesItems';
import { addFormValue, clearForm } from '../store/searchFormReduser';
import { MoreShowButton } from '../components/MoreShowButton';
import { LoaderCatalog } from '../components/LoaderCatalog';

export const Catalog = () => {
    const value = useSelector((state) => state.formvalues.value);
    const dispatch = useDispatch();
    const { catalog, loading } = useSelector((state) => state.catalog);
    // const categories = useSelector((state) => state.categories.categories);
    // console.log(loading)
    // let loaderCatalog;

    // if (loading) {
    //     loaderCatalog
    // }

    // const loaderCatalog = () => {
    //     if (!loading) {
    //         return <LoaderCatalog />;
    //     } else {
    //         return (
    //             <>
    //                 <CategoriesItems />
    //                 <div className='row'>
    //                     {catalog.map((elem) => {
    //                         return <CatalogCards data={elem} key={elem.id} />;
    //                     })}
    //                 </div>
    //                 <MoreShowButton />
    //             </>
    //         );
    //     }
    // };

    useEffect(() => {
        if (value.length === 0) {
            dispatch(fetchCatalogItems());
        } else {
            dispatch(fetchSearchCards(value));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleSearch = (e) => {
        e.preventDefault();

        dispatch(addFormValue(e.target.value));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            dispatch(fetchSearchCards(value));
            dispatch(clearForm());
        }
    };

    if (loading) {
        return (
            <>
                <section className='catalog'>
                    <h2 className='text-center'>Каталог</h2>
                    <LoaderCatalog/>
                </section>
            </>
        );
    }

    return (
        <section className='catalog'>
            <h2 className='text-center'>Каталог</h2>
            <form
                className='catalog-search-form form-inline'
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    className='form-control'
                    placeholder='Поиск'
                    value={value}
                    onChange={(e) => handleSearch(e)}
                    onKeyDown={(e) => handleKeyPress(e)}
                />
            </form>
            <CategoriesItems />
            <div className='row'>
                {catalog.map((elem) => {
                    return <CatalogCards data={elem} key={elem.id} />;
                })}
            </div>
            <MoreShowButton />
        </section>
    );
};
