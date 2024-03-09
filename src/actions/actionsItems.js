import { addCard } from '../store/CardItemReduser';
import {
    addCatalogItems,
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
        .then((response) => dispatch(addCategoriesItems(response.data)))
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
}

export const fetchSearchCards = (str) => async (dispatch) => {
    dispatch(catalogLoader());
    dispatch(clearCatalogs());

    await axios
        .get(URL + `/api/items?q=${str}`)
        .then((response) => dispatch(addCatalogItems(response.data)))
        .catch((err) => {
            console.log(err);
        });
}

export const fetchPersonalCategiories = (id) => async (dispatch) => {
    dispatch(clearCatalogs());
    dispatch(catalogLoader());

    await axios
        .get(URL + `/api/items?categoryId=${id}`)
        .then((response) => dispatch(addCatalogItems(response.data)))
        .catch((err) => {
            console.log(err);
        });
}
