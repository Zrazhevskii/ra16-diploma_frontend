import axios from 'axios';

const urlHits = 'http://localhost:3500/api';

export const getHits = async () => {
    const hits = await axios
        .get(urlHits + '/top-sales')
        .then((res) => {
            // console.log(res)
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
    return hits;
};
