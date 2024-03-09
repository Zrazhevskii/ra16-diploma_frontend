import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchPersonalCategiories,
    fetchCategoriesItems,
    fetchCatalogItems,
} from '../actions/actionsItems';
import { activeCat } from '../store/ActiveCategories';

export const CategoriesItems = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);
    const actives = useSelector((state) => state.activeCategories)

    const handleSearchCategory = (e, id) => {
        e.preventDefault();
        dispatch(activeCat(id))
        // dispatch(fetchPersonalCategiories(id));
        // console.log(typeof(id))
    };

    const handleAllProducts = (e) => {
        e.preventDefault();
        dispatch(activeCat(11))
        // console.log(actives)
        // dispatch(fetchCatalogItems());
    };

    // const getClass = (id) => id === id ? "nav-link active" : "nav-link";
    // const activClass = ({ isActive }) =>
    //     isActive ? 'nav-link active' : 'nav-link';

    return (
        <>
            <ul className='catalog-categories nav justify-content-center'>
                <li className='nav-item'>
                    <a
                        className={actives['11']}
                        href='#'
                        onClick={(e) => handleAllProducts(e)}
                    >
                        Все
                    </a>
                </li>
                {categories.map((elem) => {

                    return (
                        <li className='nav-item' key={elem.id}>
                            <a
                                className={actives[elem.id]}
                                href='#'
                                onClick={(e) =>
                                    handleSearchCategory(e, elem.id)
                                }
                            >
                                {elem.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

// onClick={() => handleSearchCategory(data.title)}
{
    /* <CategoriesItems data={elem} key={elem.id}/> */
}
