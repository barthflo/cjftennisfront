import React, { useState, useEffect, Fragment } from 'react'
import {Route, Redirect} from 'react-router-dom';
import AuthService from '../../services/auth.service';

const ProtectedRoute = ({component : Component, ...rest}) => {
    
    const [auth, setAuth] = useState([]);
    const [pwResetAuth, setPwResetAuth] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = rest.computedMatch.params.token;

    useEffect(async () => {
        if(token){
            await AuthService.resetPwAuthenticated(token)
                    .then(res => {
                        if (res && res.status === 200){
                            setPwResetAuth(res.data);
                            setAuth([])
                            AuthService.logout()
                        }
                    })
                    .catch(err => console.log(err));
        } else {
            await AuthService.userAuthenticated()
                    .then(res => { 
                        if(res && res.status === 200){
                            setAuth(res.data);
                            setPwResetAuth([])
                        }
                    })
                    .catch(err => console.log(err));
        }
        setLoading(false);
    },[])
 
    return (
        <Route
            {...rest}
            render = { props =>
                !loading && (
                (auth.userId || pwResetAuth.userId)  ?
                 <Component {...props} user={pwResetAuth.userId} /> 
                :
                <Redirect to='/admin/login' />
                )
            }
        >
        </Route>
    )
}

export default ProtectedRoute