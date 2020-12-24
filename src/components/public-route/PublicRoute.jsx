import React, { Fragment } from 'react'
import {Route} from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import {DOMAIN_URL} from '../../http.js';

const PublicRoute = ({component : Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render = { props =>
                props.history.location.pathname === '/admin/login' 
                ?
                <Fragment>
                    <Component {...props} background={`${DOMAIN_URL}/assets/login-background3.jpg`}/>
                </Fragment>
                :
                <Fragment>
                    <Navbar />
                    <Component {...props} />
                    <Footer /> 
                </Fragment>  
                }
        >
        </Route>
    )
}

export default PublicRoute