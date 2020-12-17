import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import AuthService from '../../services/auth.service';

const ProtectedRoute = ({component : Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render = { props =>
                AuthService.getUser() !== null ?
                 <Component {...props} /> 
                :
                <Redirect to='/admin/login' />
            }
        >
        </Route>
    )
}

export default ProtectedRoute