import {
    ADD_ADRESS_ORDER,
    ADD_PHONE_ORDER,
    CHANGE_AGREEMENT,
    CLEAR_ORDER,
    LOADING_ORDER,
    LOADING_ORDER_ERROR,
} from '../actions/actions';

const initialState = {
    phone: '',
    adress: '',
    agreement: false,
    loading: false,
    error: false,
};

const OrderReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PHONE_ORDER:
            return {
                ...state,
                phone: action.payload,
            };

        case ADD_ADRESS_ORDER:
            return {
                ...state,
                adress: action.payload,
            };

        case CHANGE_AGREEMENT:
            return {
                ...state,
                agreement: !state.agreement,
            };

        case LOADING_ORDER:
            return {
                ...state,
                agreement: false,
                loading: true,
                error: false,
            };

        case LOADING_ORDER_ERROR:
            return {
                ...state,
                agreement: false,
                loading: false,
                error: true,
            };

        case CLEAR_ORDER:
            state = initialState;
            return state;

        default:
            return state;
    }
};

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

export default OrderReduser;
