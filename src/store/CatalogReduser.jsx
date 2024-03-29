import {
    ADD_CATALOG_SUCCES,
    CATALOG_LOADER_START,
    CATALOG_LOADER_ERROR,
    CLEAR_CATALOG,
    ADD_MORE_PRODUCTS,
} from '../actions/actions';

const initialState = {
    catalog: [],
    loading: false,
    error: false,
};

const catalogReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATALOG_SUCCES:
            return {
                ...state,
                catalog: action.payload,
                loading: false,
                error: false,
            };

        case ADD_MORE_PRODUCTS:
            return {
                ...state,
                catalog: [...state.catalog, ...action.payload],
                loading: false,
                error: false,
            };

        case CATALOG_LOADER_START:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case CATALOG_LOADER_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };

        case CLEAR_CATALOG:
            state = initialState;
            return state;

        default:
            return state;
    }
};

export const addCatalogItems = (payload) => ({
    type: ADD_CATALOG_SUCCES,
    payload,
});

export const catalogLoader = () => ({
    type: CATALOG_LOADER_START,
});

export const catalogLoaderError = () => ({
    type: CATALOG_LOADER_ERROR,
});

export const clearCatalogs = () => ({
    type: CLEAR_CATALOG,
});

export const addMorePrioducts = (payload) => ({
    type: ADD_MORE_PRODUCTS,
    payload,
});

export default catalogReduser;
