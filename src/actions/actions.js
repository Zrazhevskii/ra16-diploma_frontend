// 'HITS'
export const ADD_HITS_ITEMS_SUCCESS = 'ADD_HITS_ITEMS_SUCCESS';
export const HITS_LOADER_START = 'HITS_LOADER';
export const HITS_LOADER_ERROR = 'HITS_LOADER_ERROR';

export const ADD_CATALOG_SUCCES = 'ADD_CATALOG_SUCCES';
export const ADD_MORE_PRODUCTS = 'ADD_MORE_PRODUCTS';
export const CATALOG_LOADER_START = 'CATALOG_LOADER_START';
export const CATALOG_LOADER_ERROR = 'CATALOG_LOADER_ERROR';
export const SHOW_MORE_CATALOG = 'SHOW_MORE_CATALOG';
export const CLEAR_CATALOG = 'CLEAN_CATALOG';

export const ALL_PRODUCTS = 'ALL_PRODUCTS';
export const NEXT_PRODUCTS = 'NEXT_PRODUCTS';
export const ORDER_SUCCES = 'ORDER_SUCCES';
export const ORDER_FALSE = 'ORDER_FALSE';

export const ADD_CATEGORIES_SUCCES = 'ADD_CATEGORIES_SUCCES';
export const CATEGORIES_LOADER_START = 'CATEGORIES_LOADER_START';
export const CATEGORIES_LOADER_ERROR = 'CATEGORIES_LOADER_ERROR';

export const ADD_FORM_VALUES = 'ADD_FORM_VALUES';
export const CLEAR_FORM = 'CLEAR_FORM';

export const ADD_CARD_ITEM_SUCCES = 'ADD_CARD_ITEM';
export const CARD_LOADER_START = 'CARD_LOADER_ITEM';
export const CARD_LOADER_ERROR = 'CARD_LOADER_ERROR';

export const ELEVEN_ACTIVE = '11';
export const TWELVE_ACTIVE = 'TWELVE_ACTIVE';
export const THIRTEEN_ACTIVE = 'THIRTEEN_ACTIVE';
export const FOURTEEN_ACTIVE = 'FOURTEEN_ACTIVE';
export const FIFTEEN_ACTIVE = 'FIFTEEN_ACTIVE';

export const ADD_PRODUCT_CART_SUCCES = 'ADD_PRODUCT_CART_SUCCES';
export const DELET_PRODUCT_CART = 'DELET_PRODUCT_CART';
export const SUM_CART = 'SUM_CART';
export const LOADING_CART = 'LOADING_CART';
export const UPDATE_ITEM_CART = 'UPDATE_ITEM_CART';
export const LOADING_ERROR_CART = 'LOADING_ERROR_CART';
export const LOAD_LOCALSTORAGE_CART = 'LOAD_LOCALSTORAGE_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const ADD_PHONE_ORDER = 'ADD_PHONE_ORDER';
export const ADD_ADRESS_ORDER = 'ADD_ADRESS_ORDER';
export const CHANGE_AGREEMENT = 'CHANGE_AGREEMENT';
export const LOADING_ORDER = 'LOADING_ORDER';
export const LOADING_ORDER_ERROR = 'LOADING_ORDER_ERROR';
export const CLEAR_ORDER = 'CLEAR_ORDER';

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

export const allProducts = () => ({
    type: ALL_PRODUCTS,
});

export const nextProducts = () => ({
    type: NEXT_PRODUCTS,
});

export const orderSetSucces = () => ({
    type: ORDER_SUCCES,
});

export const orderFalse = () => ({
    type: ORDER_FALSE,
});

export const addCartProdact = (payload) => ({
    type: ADD_PRODUCT_CART_SUCCES,
    payload,
});

export const updateCartProducts = (payload) => ({
    type: UPDATE_ITEM_CART,
    payload,
});

export const loadingCart = () => ({
    type: LOADING_CART,
});

export const localstorage = (payload) => ({
    type: LOAD_LOCALSTORAGE_CART,
    payload,
});

export const loadingError = () => ({
    type: LOADING_ERROR_CART,
});

export const deletProductCart = (payload) => ({
    type: DELET_PRODUCT_CART,
    payload,
});

export const clearCart = () => ({
    type: CLEAR_CART,
});

export const addHitsAction = (payload) => ({
    type: ADD_HITS_ITEMS_SUCCESS,
    payload,
});

export const hitsLoader = () => ({ type: HITS_LOADER_START });

export const hitsLoaderError = () => ({ type: HITS_LOADER_ERROR });

export const addPhone = (payload) => ({
    type: ADD_PHONE_ORDER,
    payload,
});

export const addAdress = (payload) => ({
    type: ADD_ADRESS_ORDER,
    payload,
});

export const changeAgreement = () => ({
    type: CHANGE_AGREEMENT,
});

export const orderLoader = () => ({
    type: LOADING_ORDER,
});

export const orderLoaderError = () => ({
    type: LOADING_ORDER_ERROR,
});

export const clearOrder = () => ({
    type: CLEAR_ORDER,
});
