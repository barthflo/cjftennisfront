import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {DOMAIN_URL, BACK_URL} from '../../http'
import {useForm} from 'react-hook-form'
import Axios from 'axios'
import AuthService from '../../services/auth.service.jsx'
import RotateLoader from 'react-spinners/RotateLoader'
import '../../pages/password.pages/PasswordForms.css'

const ResetPasswordForm = ({userId}) => {

    const {register, errors, handleSubmit} = useForm();
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [message, setMessage] = useState();
    const history = useHistory();

    useEffect(() => {
        Axios.get(`${BACK_URL}/admins/${userId}`)
             .then(res => {
                setUser(res.data);
                setIsLoading(false);
            })
    }, [userId]);

    const onSubmit = (data) => {
        Axios.put(`${BACK_URL}/admins/${userId}`, {password: data.password})
            .then(res => {
                setMessage(() => {
                    return (
                        <div className="d-flex justify-content-center">
                            <p className="text-success font-italic font-bold">Le mot de passe à été mis à jour avec succès! Vous allez être redirigé sur la page administrateur.</p>
                        </div>
                    )
                });
                setTimeout(() => {
                    setMessage();
                    AuthService.login(user.name, data.password)
                                .then(res => {
                                    if(res.status === 200){
                                        history.push('/admin');
                                    }
                                })
                                .catch(err => console.log(err))
                }
                , 5000);
        })
            .catch(err => console.log(err))    
    }

    return (
        <div className="ForgotPassword card d-flex justify-content-center align-items-center p-2">
            <div className="card-header d-flex flex-column align-items-center">
                <figure 
                    style={{width:"75px", height:"75px"}}
                    className="mt-2"
                >
                    <Link to='/'>
                        <img
                            className = "w-100 h-100"
                            src={`${DOMAIN_URL}/upload/logo_cjf_tennis.jpg`} 
                            alt="logo"
                        />
                    </Link>
                </figure>
                <h1 className="text-center">Réinitialisation du mot de passe</h1>
                {isLoading ? 
                <div className="loader-container d-flex justify-content-center align-items-center" style={{minHeight:"100px"}}>
                    <RotateLoader size={10} color={"#345C3E"} /> 
                </div> : 
                <p className="font-italic text-center">Veuillez entrer votre nouveau mot de passe, {user.name}.</p>
                }
                {message && message}
            </div>
            <div className="card-body">
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className="d-flex flex-column">
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Mot de passe :</label>
                        <input 
                            type="password" 
                            className={"form-control" + (errors.password ? " is-invalid" : " ")} 
                            id="password"
                            name='password'
                            defaultValue={""}
                            ref={register({
                                required : true,
                                minLength : 6
                            })}
                        />
                        {errors.password && errors.password.type==="required" ? <div className="invalid-feedback">Veuillez entrer un mot de passe</div> : ''}
                        {errors.password && errors.password.type==="minLength" ? <div className="invalid-feedback">Le mot de passe dois contenir au moins 6 charactères</div> : ''}

                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordConfirm" className="form-label">Confirmez votre mot de passe :</label>
                        <input 
                            type="password" 
                            className={"form-control" + (errors.passwordConfirm ? " is-invalid" : " ")} 
                            id="passwordConfirm"
                            name='passwordConfirm'
                            defaultValue={""}
                            ref={register({
                                required : true,
                                minLength : 6,
                                validate : value => {
                                        const password = document.getElementById('password');
                                        return password.value === value 
                                    }
                            })}
                        />
                        {errors.passwordConfirm && errors.passwordConfirm.type==="required" ? <div className="invalid-feedback">Confirmation obligatoire</div> : ''}
                        {errors.passwordConfirm && errors.passwordConfirm.type==="minLength" ? <div className="invalid-feedback">La confirmation doit faire au moins 6 charactères</div> : ''}
                        {errors.passwordConfirm && errors.passwordConfirm.type==="validate" ? <div className="invalid-feedback">Le mot de passe et la confirmation doivent être les mêmes</div> : ''}
                    </div>
                    <button type="submit" className="btn btn-outline-dark mt-2">Envoyer</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPasswordForm
