import axios from "axios";
const apiInstance = axios.create({
        baseURL: 'https://rickandmortyapi.com/api/character',
    });

async function fetchCharaters(page) {
    const { data } = await apiInstance.get(`/?page=${page}`);
     
    const charaters = data.results;

    if (!charaters.length) {
        throw new Error(`Sorry, there are no charaters.`)
    }

    return data;
};

async function fetchCharaterById(id) {
    const { data } = await apiInstance.get(`/${id}`);
    
    return data;
}

const api = {
    fetchCharaters,
    fetchCharaterById,
};

export default api;