import React, {Fragment} from 'react';
import AuthService from '../../services/auth.service';
import {Redirect} from 'react-router-dom';
import ForgotPasswordForm from '../../components/password-forms/ForgotPasswordForm'

const ForgotPassword = (props) => {
    return (
        <Fragment>
            {AuthService.getUser() ?
                <Redirect to ='/admin' />
            :
            <main 
                className="PasswordPages d-flex justify-content-center align-items-center"
                style={{backgroundImage:`url(${props.background})`}}
            >
            <ForgotPasswordForm />
            </main>
            }   
        </Fragment>
    )
}

export default ForgotPassword;