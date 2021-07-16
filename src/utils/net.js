//封装axios
import axios from "axios";

import { Toast } from 'vant';

import store from '@/store/index.js'

import router from '@/router/index.js'

let api = axios.create()
api.defaults.timeout = 5000;


api.defaults.baseURL = 'http://192.168.31.191:8000';

// api.defaults.headers['Content-Type'] =  'application/x-www-form-urlencoded';
api.interceptors.request.use(function (config) {

    Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration:api.defaults.timeout,
    });

    return config;
}, function (error) {

    return Promise.reject(error);
});


api.interceptors.response.use(function (response) {
    Toast.clear()
    return response;
}, function (error) {

    Toast.clear()
    return Promise.reject(error);

});

export default api
