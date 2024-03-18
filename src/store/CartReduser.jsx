import {
    ADD_PRODUCT_CART_SUCCES,
    DELET_PRODUCT_CART,
    LOADING_CART,
    SUM_CART,
    UPDATE_ITEM_CART,
} from '../actions/actions';

const initialState = {
    cart: [],
    loading: false,
    allSum: 0,
};

const CartReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART_SUCCES:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

        case UPDATE_ITEM_CART:
            const indexCart = state.cart.findIndex(
                (comment) => comment.title === action.payload.title && comment.rates === action.payload.rates
            );

            const newCart = state.cart.slice()
            newCart[indexCart] = action.payload

            // localStorage.setItem('cart', JSON.stringify(newCart));

            return {
                ...state,
                cart: newCart,
            }


        case LOADING_CART:
            return {
                ...state,
                loading: true,
            };

        case SUM_CART:
            return {
                ...state,
                allSum: action.payload,
            };

        case DELET_PRODUCT_CART:
        let newProductsCart = state.cart.filter(elem => 
                elem.id !== action.payload
            );
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

export const updateCartProducts = (payload) => ({
    type: UPDATE_ITEM_CART,
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
