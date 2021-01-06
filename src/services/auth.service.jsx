import Axios from 'axios';
import {BACK_URL} from '../http';

const login = (username, password) => {
    return Axios.post(`${BACK_URL}/admins/login`, {username, password})
                .then(res => {
                    if(!res.data.auth){
                        return res;
                    } else {
                        localStorage.setItem("token", res.data.accessToken);
                        localStorage.setItem("user", JSON.stringify(res.data.user));
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
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
};

const userAuthenticated = () => {
    return Axios.get(`${BACK_URL}/admins/authenticate`, {
                headers : {
                    "x-access-token" : localStorage.getItem("token")
                },
            })
            .then(res => {
                    console.log(res);
                    return res;
            })
            .catch(err => console.log(err));
}


export default { login, logout, getUser, userAuthenticated, getUser }