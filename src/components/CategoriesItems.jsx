import { useDispatch, useSelector } from 'react-redux';
import {
    fetchPersonalCategiories,
    fetchCatalogItems,
    fetchNullItems,
} from '../actions/actionsItems';
import { activeCat } from '../store/ActiveCategories';

export const CategoriesItems = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);
    const actives = useSelector((state) => state.activeCategories);

    const handleSearchCategory = (e, id) => {
        e.preventDefault();
        if (id === 11) {
            dispatch(activeCat(id));
            dispatch(fetchCatalogItems());
            return;
        }

        dispatch(activeCat(id));
        dispatch(fetchPersonalCategiories(id));
        dispatch(fetchNullItems(id));
    };

    return (
        <>
            <ul className='catalog-categories nav justify-content-center'>
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
