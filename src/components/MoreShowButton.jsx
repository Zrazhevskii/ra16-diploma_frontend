import {
    fetchShowMoreProducts,
    fetchShowMoreSearchForm,
} from '../actions/actionsItems';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderShowMoreButton } from './Loaders';

export const MoreShowButton = () => {
    const dispatch = useDispatch();
    const { allProducts } = useSelector((state) => state.bool);
    const actives = useSelector((state) => state.activeCategories);
    const value = useSelector((state) => state.formvalues.value);
    const showMore = useSelector((state) => state.catalog.showMore)
    const { active } = actives;

    const handleShowMoreProducts = (e) => {
        e.preventDefault();

        if (value.length !== 0 && !allProducts) {
            dispatch(fetchShowMoreSearchForm(value));
            return;
        }
        dispatch(fetchShowMoreProducts(active));
    };

    if (showMore) {
        return (
            <LoaderShowMoreButton/>
        )
    }

    return (
        !allProducts && (
            <div className='text-center'>
                <button
                    className='btn btn-outline-primary'
                    onClick={(e) => handleShowMoreProducts(e)}
                >
                    Загрузить ещё
                </button>
            </div>
        )
    );
};
