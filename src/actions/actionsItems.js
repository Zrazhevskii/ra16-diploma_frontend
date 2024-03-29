import { addCard, cardLoader, cardLoaderError } from '../store/CardItemReduser';
import {
    addCatalogItems,
    addMorePrioducts,
    catalogLoader,
    catalogLoaderError,
    clearCatalogs,
} from '../store/CatalogReduser';
import axios from 'axios';
import { clearForm } from '../store/searchFormReduser';
import {
    addCategoriesItems,
    addHitsAction,
    allProducts,
    categoriesLoader,
    categoriesLoaderError,
    clearCart,
    clearOrder,
    hitsLoader,
    hitsLoaderError,
    nextProducts,
    orderLoader,
    orderLoaderError,
    orderSetSucces,
} from './actions';

const URL = 'http://localhost:3500';
const all = {
    id: 11,
    title: 'Все',
};
let OFFSET = 6;
let OFFSETNULL = 6;
let OFFSETSEARCH = 6;

export const fetchHitsItems = () => async (dispatch) => {
    dispatch(hitsLoader());

    await axios
        .get(URL + '/api/top-sales')
        .then((response) => dispatch(addHitsAction(response.data)))
        .catch((err) => {
            dispatch(hitsLoaderError());
            console.log(err);
        });
};

export const fetchCatalogItems = () => async (dispatch) => {
    dispatch(nextProducts());
    dispatch(clearCatalogs());
    dispatch(catalogLoader());

    await axios
        .get(URL + '/api/items')
        .then((response) => dispatch(addCatalogItems(response.data)))
        .catch((err) => {
            dispatch(catalogLoaderError());
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
            dispatch(categoriesLoaderError());
            console.log(err);
        });
};

export const fetchCardItem = (id) => async (dispatch) => {
    dispatch(cardLoader());

    await axios
        .get(URL + `/api/items/${id}`)
        .then((response) => dispatch(addCard(response.data)))
        .catch((err) => {
            dispatch(cardLoaderError());
            console.log(err);
        });
};

export const fetchSearchCards = (str) => async (dispatch) => {
    dispatch(catalogLoader());
    dispatch(clearCatalogs());

    await axios
        .get(URL + `/api/items?q=${str}`)
        .then((response) => {
            if (response.data.length < 6) {
                dispatch(allProducts());
            }
            dispatch(addCatalogItems(response.data));
        })
        .catch((err) => {
            console.log(err);
        });
};

export const fetchShowMoreSearchForm = (str) => async (dispatch) => {
    await axios
        .get(URL + `/api/items?q=${str}&offset=${OFFSETSEARCH}`)
        .then((response) => {
            OFFSETSEARCH = OFFSETSEARCH + 6;
            if (response.data.length < 6) {
                dispatch(allProducts());
                OFFSETSEARCH = 6;
                dispatch(clearForm());
            }
            dispatch(addMorePrioducts(response.data));
        });
};

export const fetchPersonalCategiories = (id) => async (dispatch) => {
    dispatch(nextProducts());
    dispatch(clearCatalogs());
    dispatch(catalogLoader());
    dispatch(clearForm());

    await axios
        .get(URL + `/api/items?categoryId=${id}`)
        .then((response) => {
            if (response.data.length < 6) {
                dispatch(allProducts());
            }
            dispatch(addCatalogItems(response.data));
            dispatch(fetchNullItems(id));
        })
        .catch((err) => {
            console.log(err);
        });
};

export const fetchShowMoreProducts = (id) => async (dispatch) => {
    dispatch(catalogLoader());

    if (id === 11) {
        await axios
            .get(URL + `/api/items?offset=${OFFSET}`)
            .then((response) => {
                OFFSET = OFFSET + 6;
                if (response.data.length < 6) {
                    dispatch(allProducts());
                    OFFSET = 6;
                }
                dispatch(addMorePrioducts(response.data));
                dispatch(fetchNullItems(id));
            })
            .catch((err) => {
                dispatch(catalogLoaderError());
                console.log(err);
            });
    } else {
        await axios
            .get(URL + `/api/items?categoryId=${id}&offset=${OFFSET}`)
            .then((response) => {
                OFFSET = OFFSET + 6;
                if (response.data.length < 6) {
                    dispatch(allProducts());
                    OFFSET = 6;
                }
                dispatch(addMorePrioducts(response.data));
                dispatch(fetchNullItems(id));
            })
            .catch((err) => {
                dispatch(catalogLoaderError());
                console.log(err);
            });
    }
};

export const fetchNullItems = (id) => async (dispatch) => {
    if (id === 11) {
        await axios
            .get(URL + `/api/items?offset=${OFFSET}`)
            .then((response) => {
                OFFSETNULL = OFFSETNULL + 6;
                if (response.data.length === 0) {
                    OFFSETNULL = 6;
                    dispatch(allProducts());
                }
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        await axios
            .get(URL + `/api/items?categoryId=${id}&offset=${OFFSET}`)
            .then((response) => {
                OFFSETNULL = OFFSETNULL + 6;
                if (response.data.length === 0) {
                    dispatch(allProducts());
                    OFFSETNULL = 6;
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

export const fetchSetOrder = (order) => async (dispatch) => {
    dispatch(orderLoader());

    await axios
        .post(URL + `/api/order`, order)
        .then((response) => {
            if (response.status === 204) {
                dispatch(clearOrder());
                dispatch(clearCart());
                dispatch(orderSetSucces());
                localStorage.removeItem('cart');
                console.log(response);
            } else if (response.status === 400) {
                dispatch(orderLoaderError());
            }
        })
        .catch((err) => {
            dispatch(orderLoaderError());
            console.log(err);
        });
};
