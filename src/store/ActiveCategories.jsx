import {
    ELEVEN_ACTIVE,
    FIFTEEN_ACTIVE,
    FOURTEEN_ACTIVE,
    THIRTEEN_ACTIVE,
    TWELVE_ACTIVE,
} from '../actions/actions';

const initialState = {
    11: 'nav-link',
    12: 'nav-link',
    13: 'nav-link',
    14: 'nav-link',
    15: 'nav-link',
    active: 0,
};

const activeCategoriesReduser = (state = initialState, action) => {
    switch (action.type) {
        case ELEVEN_ACTIVE:
            return {
                11: 'nav-link active',
                12: 'nav-link',
                13: 'nav-link',
                14: 'nav-link',
                15: 'nav-link',
                active: 11,
            };

        case TWELVE_ACTIVE:
            return {
                11: 'nav-link',
                12: 'nav-link active',
                13: 'nav-link',
                14: 'nav-link',
                15: 'nav-link',
                active: 12,
            };

        case THIRTEEN_ACTIVE:
            return {
                11: 'nav-link',
                12: 'nav-link',
                13: 'nav-link active',
                14: 'nav-link',
                15: 'nav-link',
                active: 13,
            };

        case FOURTEEN_ACTIVE:
            return {
                11: 'nav-link',
                12: 'nav-link',
                13: 'nav-link',
                14: 'nav-link active',
                15: 'nav-link',
                active: 14,
            };

        case FIFTEEN_ACTIVE:
            return {
                11: 'nav-link',
                12: 'nav-link',
                13: 'nav-link',
                14: 'nav-link',
                15: 'nav-link active',
                active: 15,
            };

        default:
            return state;
    }
};

export const activeCat = (id) => {
    if (id === 11) {
        return {
            type: ELEVEN_ACTIVE,
        };
    } else if (id === 12) {
        return {
            type: TWELVE_ACTIVE,
        };
    } else if (id === 13) {
        return {
            type: THIRTEEN_ACTIVE,
        };
    } else if (id === 14) {
        return {
            type: FOURTEEN_ACTIVE,
        };
    } else {
        return {
            type: FIFTEEN_ACTIVE,
        };
    }
};

export default activeCategoriesReduser;
