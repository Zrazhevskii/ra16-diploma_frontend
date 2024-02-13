import { addHitsAction } from '../store/HitsReduser';

export const fetchHitsItems = () => {
    return function (dispatch) {
        fetch('http://localhost:3500/api/top-sales')
            .then((response) => response.json())
            .then((json) => dispatch(addHitsAction(json)));
    };
};
