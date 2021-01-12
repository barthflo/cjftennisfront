import Axios from 'axios';
import {BACK_URL} from '../http';

const login = (username, password) => {
    return Axios.post(`${BACK_URL}/admins/login`, {username, password})
                .then(res => {
                    if(!res.data.auth){
                        return res;
                    } else {
                        localStorage.setItem("token", res.data.accessToken);
                        localStorage.setItem("user", JSON.stringify({...res.data.user, password:'hidden'}));
                        return res;
                    }
                })
                .catch(err => {
                    if(err.response){
                        return err.response;
                    }
                })
}

const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
}

const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const userAuthenticated = () => {
    return Axios.get(`${BACK_URL}/admins/authenticate`, {
                headers : {
                    "x-access-token" : localStorage.getItem("token")
                },
            })
            .then(res => {
                return res;
            })
            .catch(err => {
                console.log(err);
                logout();
                return
            });
}

const resetPwAuthenticated = async (token) => {
    return await Axios.get(`${BACK_URL}/admins/authenticate`, {
        headers : {
            "x-access-token" : token
        }
    })
    .then(res => res)
    .catch(err => {
        console.log(err);
        return
    })
}

export default { login, logout, getUser, userAuthenticated, resetPwAuthenticated}