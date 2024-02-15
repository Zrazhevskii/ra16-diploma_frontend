import {
    addHitsAction,
    hitsLoader,
    hitsLoaderError,
} from '../store/HitsReduser';
import axios from 'axios';

export const fetchHitsItems = () => async (dispatch) => {
    dispatch(hitsLoader());

    await axios
        .get('http://localhost:3500/api/top-sales')
        .then((response) => dispatch(addHitsAction(response.data)))
        .catch((err) => {
            dispatch(hitsLoaderError(err));
            console.log(err);
        });
};


