import Axios from 'axios';
import {BACK_URL} from '../http';

const login = (username, password) => {
    return Axios.post(`${BACK_URL}/admins/login`, {username, password})
                .then(res => {
                    localStorage.setItem('user', JSON.stringify(res.data));
                    return res;
                })
                .catch(error => {
                    if(error.response){
                        return error.response;
                    }
                })
}

const logout = () => {
    localStorage.removeItem("user");
}

const getUser = () => JSON.parse(localStorage.getItem("user"));


export default { login, logout, getUser };