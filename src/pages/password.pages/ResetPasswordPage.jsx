import React from 'react';
import {DOMAIN_URL} from '../../http';
import ResetPasswordForm from '../../components/password-forms/ResetPasswordForm'

const ResetPasswordPage = (props) => {
    
    return (
        <main 
            className="PasswordPages d-flex justify-content-center align-items-center"
            style={{backgroundImage:`url(${DOMAIN_URL}/assets/login-background1.jpg)`}}
        >
        <ResetPasswordForm userId={props.user}/>
        </main>
    )
}

export default ResetPasswordPage;