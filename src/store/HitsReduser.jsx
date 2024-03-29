import {
    ADD_HITS_ITEMS_SUCCESS,
    HITS_LOADER_START,
    HITS_LOADER_ERROR,
} from '../actions/actions';

const initialStateHits = {
    hits: [],
    loadingHits: false,
    error: false,
};

const HitsReduser = (state = initialStateHits, action) => {
    switch (action.type) {
        case HITS_LOADER_START:
            return {
                ...state,
                loadingHits: true,
                error: false,
            };
        case ADD_HITS_ITEMS_SUCCESS:
            return {
                ...state,
                hits: action.payload,
                loadingHits: false,
                error: false,
            };

        case HITS_LOADER_ERROR:
            return {
                ...state,
                loadingHits: false,
                error: true,
            };

        default:
            return state;
    }
};

export default HitsReduser;
