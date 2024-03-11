import { ALL_PRODUCTS, NEXT_PRODUCTS } from '../actions/actions'

const initialState = {
    allProducts: false
}

const BooleanReduser = (state = initialState, action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return {
                ...state,
                allProducts: true,
            }

        case NEXT_PRODUCTS:
            return {
                ...state,
                allProducts: false,
            }
        
        default:
            return state;
    }
}

export const allProducts = () => ({
    type: ALL_PRODUCTS
});

export const nextProducts = () => ({
    type: NEXT_PRODUCTS
});

export default BooleanReduser;
