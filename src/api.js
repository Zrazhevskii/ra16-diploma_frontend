import axios from 'axios';

const urlHits = 'http://localhost:7070/api/top-sales';

export const getHits = async () => {
    const hits = await axios
        .get(urlHits)
        .then((res) => {
            console.log(res)
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
    return hits;
};
