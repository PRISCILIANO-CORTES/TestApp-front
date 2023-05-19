import axios from 'axios';

const uri = process.env.REACT_APP_API

const pepsicoApi = axios.create({
    baseURL: uri
});

//* Create interceptors
pepsicoApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config
});

export default pepsicoApi;
