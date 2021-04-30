import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '6dd21b63fb859fb901b159ad8c7435bc',
        language: 'es-ES',
    }
})

export default movieDB;