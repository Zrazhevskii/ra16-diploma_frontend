import {
    ADD_PRODUCT_CART_SUCCES,
    CLEAR_CART,
    DELET_PRODUCT_CART,
    LOADING_CART,
    LOADING_ERROR_CART,
    LOAD_LOCALSTORAGE_CART,
    UPDATE_ITEM_CART,
} from '../actions/actions';

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    loading: false,
    error: false,
};

const CartReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART_SUCCES:
            return {
                ...state,
                cart: [...state.cart, action.payload],
                loading: false,
                error: false,
            };

        case LOAD_LOCALSTORAGE_CART:
            return {
                ...state,
                cart: action.payload,
                loading: false,
                error: false,
            };

        case UPDATE_ITEM_CART: {
            const indexCart = state.cart.findIndex(
                (item) =>
                    item.title === action.payload.title &&
                    item.rates === action.payload.rates
            );

            const newCart = state.cart.slice();
            newCart[indexCart] = action.payload;

            return {
                ...state,
                cart: newCart,
                loading: false,
                error: false,
            };
        }
            
        case LOADING_CART:
            return {
                ...state,
                loading: true,
                error: false,
            };

        case LOADING_ERROR_CART:
            return {
                ...state,
                loading: false,
                error: true,
            };

        case DELET_PRODUCT_CART: {
            let newProductsCart = state.cart.filter(
                (elem) => elem.id !== action.payload
            );
            localStorage.setItem('cart', JSON.stringify(newProductsCart));
            return {
                ...state,
                cart: newProductsCart,
                loading: false,
                error: false,
            };
        }
            
        case CLEAR_CART: {
            let newCarts = [];
            return {
                ...state,
                cart: newCarts,
                loading: false,
                error: false,
            };
        }
            
        default:
            return state;
    }
};

export default CartReduser;
