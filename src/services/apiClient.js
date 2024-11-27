import axios from 'axios'
import { BASE_API_URL, TIME_OUT } from '../config/apiConfig'
const apiClient = axios.create({
    baseURL: BASE_API_URL,
    timeout: TIME_OUT
});

//#region  Request Interceptor
apiClient.interceptors.request.use(
    (config) => {
        const _token = localStorage.getItem('authToken');
        if (_token) {
            config.headers.Authorization = `Bearer ${_token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject('Invalid Token', error);
    }
)
//#endregion

//#region Response Interceptor - Handle  Global Reponse
apiClient.interceptors.response.use(
    (_response) => {
        //Due Process and return reponse
        return _response
    },
    (_reponseError) => {
        //Un authorized access 
        if (_reponseError.response?.status == 401) {
            window.location.href = "/un-authorized";
        }
        return Promise.reject('Invalid Response Error', _reponseError)
    }
)
//#endregion