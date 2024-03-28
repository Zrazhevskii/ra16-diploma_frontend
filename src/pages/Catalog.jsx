import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogItems, fetchSearchCards } from '../actions/actionsItems';
import { CatalogCards } from '../components/CatalogCards';
import { CategoriesItems } from '../components/CategoriesItems';
import { addFormValue } from '../store/searchFormReduser';
import { MoreShowButton } from '../components/MoreShowButton';
import { DoubleOrbit } from 'react-spinner-animated';

export const Catalog = () => {
    const value = useSelector((state) => state.formvalues.value);
    const dispatch = useDispatch();
    const { catalog, loading } = useSelector((state) => state.catalog);

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
        }
    };

    if (loading) {
        return (
            <>
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
                <DoubleOrbit
                    text={'Loading...'}
                    center={true}
                    width={'150px'}
                    height={'150px'}
                />
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
