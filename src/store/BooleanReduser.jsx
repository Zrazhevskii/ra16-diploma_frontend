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

export default BooleanReduser;
