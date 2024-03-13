import {
    ADD_PRODUCT_CART_SUCCES,
    DELET_PRODUCT_CART,
    LOADING_CART,
    SUM_CART,
} from '../actions/actions';

const initialState = {
    cart: [],
    loading: false,
    sum: null,
};

const CartReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART_SUCCES:
            return {
                ...state,
                cart: action.payload,
            };
        case LOADING_CART:
            return {
                ...state,
                loading: true,
            };

        case SUM_CART:
            return {
                ...state,
                sum: action.payload,
            };

        case DELET_PRODUCT_CART:
            const newProductsCart = state.filter((elem) => {
                elem.id !== action.payload;
            });
            // localStorage.setItem('cart', JSON.stringify(newProductsCart));
            return {
                ...state,
                cart: newProductsCart,
            };

        default:
            return state;
    }
};

export const addCartProdact = (payload) => ({
    type: ADD_PRODUCT_CART_SUCCES,
    payload,
});

export const loadingCart = () => ({
    type: LOADING_CART,
});

export const sumCart = (payload) => ({
    type: SUM_CART,
    payload,
});

export const deletProductCart = (payload) => ({
    type: DELET_PRODUCT_CART,
    payload,
});

export default CartReduser;
