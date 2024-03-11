import { addCard } from '../store/CardItemReduser';
import { allProducts, nextProducts } from '../store/BooleanReduser';
import {
    addCatalogItems,
    addMorePrioducts,
    catalogLoader,
    catalogLoaderError,
    clearCatalogs,
} from '../store/CatalogReduser';

import {
    addCategoriesItems,
    categoriesLoader,
    categoriesLoaderError,
} from '../store/CategoriesReduser';

import {
    addHitsAction,
    hitsLoader,
    hitsLoaderError,
} from '../store/HitsReduser';

import axios from 'axios';

const URL = 'http://localhost:3500';
let OFFSET = 6;
const all = {
    id: 11,
    title: 'Все',
};

export const fetchHitsItems = () => async (dispatch) => {
    dispatch(hitsLoader());

    await axios
        .get(URL + '/api/top-sales')
        .then((response) => dispatch(addHitsAction(response.data)))
        .catch((err) => {
            dispatch(hitsLoaderError(err));
            console.log(err);
        });
};

export const fetchCatalogItems = () => async (dispatch) => {
    dispatch(nextProducts())
    dispatch(clearCatalogs());
    dispatch(catalogLoader());

    await axios
        .get(URL + '/api/items')
        .then((response) => dispatch(addCatalogItems(response.data)))
        .catch((err) => {
            dispatch(catalogLoaderError(err));
            console.log(err);
        });
};

export const fetchCategoriesItems = () => async (dispatch) => {
    dispatch(categoriesLoader());

    await axios
        .get(URL + '/api/categories')
        .then((response) => {
            response.data.unshift(all);
            dispatch(addCategoriesItems(response.data));
        })
        .catch((err) => {
            dispatch(categoriesLoaderError(err));
            console.log(err);
        });
};

export const fetchCardItem = (id) => async (dispatch) => {
    await axios
        .get(URL + `/api/items/${id}`)
        .then((response) => dispatch(addCard(response.data)))
        .catch((err) => {
            console.log(err);
        });
};

export const fetchSearchCards = (str) => async (dispatch) => {
    dispatch(catalogLoader());
    dispatch(clearCatalogs());

    await axios
        .get(URL + `/api/items?q=${str}`)
        .then((response) => dispatch(addCatalogItems(response.data)))
        .catch((err) => {
            console.log(err);
        });
};

export const fetchPersonalCategiories = (id) => async (dispatch) => {
    dispatch(nextProducts());
    dispatch(clearCatalogs());
    dispatch(catalogLoader());

    await axios
        .get(URL + `/api/items?categoryId=${id}`)
        .then((response) => {
            if (response.data.length < 6) {
                dispatch(allProducts());
            }
            dispatch(addCatalogItems(response.data))
        })
        .catch((err) => {
            console.log(err);
        });
};

export const fetchShowMoreProducts = (id) => async (dispatch) => {
    if (id === 11) {
        await axios
            .get(URL + `/api/items?offset=${OFFSET}`)
            .then((response) => {
                OFFSET = OFFSET + 6;
                if (response.data.length < 6) {
                    dispatch(allProducts())
                    // dispatch(addMorePrioducts(response.data));
                    // return
                }
                dispatch(addMorePrioducts(response.data));
            })
            .catch((err) => {
                console.log(err);
            });
        return
    } 
    await axios
        .get(URL + `/api/items?categoryId=${id}&offset=${OFFSET}`)
        .then((response) => {
            OFFSET = OFFSET + 6;
            if (response.data.length < 6) {
                dispatch(allProducts())
                // dispatch(addMorePrioducts(response.data));
                // return
            }
            dispatch(addMorePrioducts(response.data));
        })
        .catch((err) => {
            console.log(err);
        });
    
};
