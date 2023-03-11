import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character',
    params: {
        // api_key: 'e09f06c48afcb3ebfd8a25b0b6965d1e',
        // language: 'en-US',
        // page: `${page}`,
    },
});

async function fetchCharaters() {
    const response = await apiInstance.get();
     
    const charaters = response.data.results;

    if (!charaters.length) {
        throw new Error(`Sorry, there are no charaters.`)
    }

    return charaters;
};

const api = {
    fetchCharaters,

};

export default api;