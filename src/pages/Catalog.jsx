import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogItems, fetchSearchCards } from '../actions/actionsItems';
import { CatalogCards } from '../components/CatalogCards';
import { CategoriesItems } from '../components/CategoriesItems';
import { addFormValue, clearForm } from '../store/searchFormReduser';
import { MoreShowButton } from '../components/MoreShowButton';

export const Catalog = () => {
    const value = useSelector((state) => state.formvalues.value);
    const dispatch = useDispatch();
    const catalogItems = useSelector((state) => state.catalog.catalog);
    const categories = useSelector((state) => state.categories.categories);

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
                {catalogItems.map((elem) => {
                    return <CatalogCards data={elem} key={elem.id} />;
                })}
            </div>
            <MoreShowButton />
        </section>
    );
};
