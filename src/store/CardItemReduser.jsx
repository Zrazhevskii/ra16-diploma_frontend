import {
    ADD_CARD_ITEM_SUCCES,
    CARD_LOADER_START,
    CARD_LOADER_ERROR,
} from '../actions/actions';

const initialState = {
    product: [],
    loading: false,
    error: '',
};

const cardItemReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD_ITEM_SUCCES:
            return {
                ...state,
                product: action.payload,
                loading: false,
                error: '',
            };
        
        case CARD_LOADER_START:
            return {
                ...state,
                loading: true,
                error: '',
            };
        
        case CARD_LOADER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export const addCard = (payload) => ({
    type: ADD_CARD_ITEM_SUCCES,
    payload,
});

export const cardLoader = () => ({ 
    type: CARD_LOADER_START 
});

export const cardLoaderError = () => ({
    type: CARD_LOADER_ERROR,
    payload: 'Что-то пошло не так, преегрузите страницу',
});

export default cardItemReduser;
