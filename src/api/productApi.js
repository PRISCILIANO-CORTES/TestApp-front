import axios from 'axios';

const uri = process.env.REACT_APP_API

const productApi = axios.create({
    baseURL: uri
});

//* Create interceptors
productApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config
});

export default productApi;
