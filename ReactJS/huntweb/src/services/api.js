import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3002/api',
    baseURL: 'https://rocketseat-node.herokuapp.com/api',
})

export default api;