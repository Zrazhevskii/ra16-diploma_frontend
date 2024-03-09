import { ADD_FORM_VALUES, CLEAR_FORM } from '../actions/actions';

const initialState = {
    value: '',
};

const searchFormReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FORM_VALUES:
            return { ...state, value: action.payload };

        case CLEAR_FORM:
            state = initialState;
            return state;

        default:
            return state;
    }
};

export const addFormValue = (payload) => ({ type: ADD_FORM_VALUES, payload });
export const clearForm = () => ({ type: CLEAR_FORM });

export default searchFormReduser;
