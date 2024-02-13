import { ADD_HITS_ITEMS } from '../actions/actions';

const initialState = [];

export const HitsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HITS_ITEMS: {
            console.log(action.payload);
        }
        default:
            return state;
    }
};

export const addHitsAction = (payload) => ({ type: ADD_HITS_ITEMS, payload });
