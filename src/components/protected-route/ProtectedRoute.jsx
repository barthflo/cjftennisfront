import React, { useState, useEffect } from 'react'
import {Route, Redirect} from 'react-router-dom';
import AuthService from '../../services/auth.service';

const ProtectedRoute = ({component : Component, ...rest}) => {
    
    const [auth, setAuth] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        AuthService.userAuthenticated()
                    .then(res => { 
                        if(res){
                            setAuth(res.data);
                        } 
                        setLoading(false);
                    });
    }, [])

    return (
        <Route
            {...rest}
            render = { props =>
                !loading && (
                auth.userId ?
                 <Component {...props} /> 
                :
                <Redirect to='/admin/login' />
                )
            }
        >
        </Route>
    )
}

export default ProtectedRoute