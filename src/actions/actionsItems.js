import { addCard } from '../store/CardItemReduser';
import {
    addCatalogItems,
    catalogLoader,
    catalogLoaderError,
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

const URL = 'http://localhost:3500/api';

export const fetchHitsItems = () => async (dispatch) => {
    dispatch(hitsLoader());

    await axios
        .get(URL + '/top-sales')
        .then((response) => dispatch(addHitsAction(response.data)))
        .catch((err) => {
            dispatch(hitsLoaderError(err));
            console.log(err);
        });
};

export const fetchCatalogItems = () => async (dispatch) => {
    dispatch(catalogLoader());

    await axios
        .get(URL + '/items')
        .then((response) => dispatch(addCatalogItems(response.data)))
        .catch((err) => {
            dispatch(catalogLoaderError(err));
            console.log(err);
        });
};

export const fetchCategoriesItems = () => async (dispatch) => {
    dispatch(categoriesLoader());

    await axios
        .get(URL + '/categories')
        .then((response) => dispatch(addCategoriesItems(response.data)))
        .catch((err) => {
            dispatch(categoriesLoaderError(err));
            console.log(err);
        });
};

export const fetchCardItem = (id) => async (dispatch) => {
   
    await axios
        .get(URL + `/items/${id}`)
        .then((response) => dispatch(addCard(response.data)))
        .catch((err) => {
            console.log(err);
        });
}

export const fetchSearchCards = (str) => async (dispatch) => {
    // console.log(str)
    await axios
        .get(URL + `/items?q=${str}`)
        .then((response) => dispatch(addCatalogItems(response.data)))
        .catch((err) => {
            console.log(err);
        });
}
