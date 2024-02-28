import { ADD_CARD_ITEM, CLEAR_CARD_ITEM } from '../actions/actions';

const initialState = {
    product: [],
    loading: false,
    error: '',
}

const cardItemReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD_ITEM:
            // console.log(action.payload)
            return {
                ...state,
                product: action.payload,
                loading: false,
                error: '',
            }

        default:
            return state;
    }
}

export const addCard = (payload) => ({
    type: ADD_CARD_ITEM,
    payload
})

export default cardItemReduser
