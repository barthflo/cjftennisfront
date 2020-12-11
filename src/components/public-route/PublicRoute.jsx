import React, { Fragment } from 'react'
import {Route} from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const ProtectedRoute = ({component : Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render = { props =>
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

export default ProtectedRoute