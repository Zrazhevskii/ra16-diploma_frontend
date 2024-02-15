import {
    ADD_HITS_ITEMS_SUCCESS,
    HITS_LOADER_START,
    HITS_LOADER_ERROR,
} from '../actions/actions';

const initialState = {
    hits: [],
    loading: false,
    error: '',
};

const HitsReduser = (state = initialState, action) => {
    switch (action.type) {
        case HITS_LOADER_START:
            return {
                ...state,
                loading: true,
                error: '',
            };
        case ADD_HITS_ITEMS_SUCCESS:
            return { 
                ...state,
                hits: action.payload,
                loading: false,
            };

        case HITS_LOADER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export const addHitsAction = (payload) => ({
    type: ADD_HITS_ITEMS_SUCCESS,
    payload,
});
export const hitsLoader = () => ({ type: HITS_LOADER_START });
export const hitsLoaderError = () => ({
    type: HITS_LOADER_ERROR,
    payload: 'Что-то пошло не так, преегрузите страницу',
});

export default HitsReduser
