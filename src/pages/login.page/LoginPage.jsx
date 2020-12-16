import React, {Fragment} from 'react';
import LoginForm from '../../components/login-form/LoginForm';
import './LoginPage.css';
import AuthService from '../../services/auth.service';
import {Redirect} from 'react-router-dom';

const LoginPage = (props) => {
    return (
        <Fragment>
            {AuthService.getUser() ?
                <Redirect to ='/admin' />
            :
            <main 
                className="LoginPage d-flex justify-content-center align-items-center"
                style={{backgroundImage:`url(${props.background})`}}
            >
                <LoginForm />
            </main>
            }   
        </Fragment>
    )
}

export default LoginPage;
