import {
    ADD_CATEGORIES_SUCCES,
    CATEGORIES_LOADER_START,
    CATEGORIES_LOADER_ERROR,
} from '../actions/actions';

const initialState = {
    categories: [],
    loader: false,
    error: false,
};

const CategoriesReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORIES_SUCCES:
            return {
                ...state,
                categories: action.payload,
                loader: false,
                error: false,
            };

        case CATEGORIES_LOADER_START:
            return {
                ...state,
                loader: true,
                error: false,
            };

        case CATEGORIES_LOADER_ERROR:
            return {
                ...state,
                loader: false,
                error: true,
            };

        default:
            return state;
    }
};

export const addCategoriesItems = (payload) => ({
    type: ADD_CATEGORIES_SUCCES,
    payload,
});

export const categoriesLoader = () => ({
    type: CATEGORIES_LOADER_START,
});

export const categoriesLoaderError = () => ({
    type: CATEGORIES_LOADER_ERROR,
});

export default CategoriesReduser;
