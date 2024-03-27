import {
    ALL_PRODUCTS,
    NEXT_PRODUCTS,
    ORDER_FALSE,
    ORDER_SUCCES,
} from '../actions/actions';

const initialState = {
    allProducts: false,
    orderSucces: false,
};

const BooleanReduser = (state = initialState, action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return {
                ...state,
                allProducts: true,
                orderSucces: false,
            };

        case NEXT_PRODUCTS:
            return {
                ...state,
                allProducts: false,
                orderSucces: false,
            };

        case ORDER_SUCCES:
            return {
                ...state,
                allProducts: false,
                orderSucces: true,
            };

        case ORDER_FALSE:
            return {
                ...state,
                allProducts: false,
                orderSucces: false,
            };

        default:
            return state;
    }
};

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

export default BooleanReduser;
