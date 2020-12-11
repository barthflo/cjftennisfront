import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import Auth from '../auth-provider/AuthProvider';

const ProtectedRoute = ({component : Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render = { props =>
                Auth.getAuth() ?
                 <Component {...props} /> 
                :
                <Redirect to='/' />
            }
        >
        </Route>
    )
}

export default ProtectedRoute