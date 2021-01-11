import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {DOMAIN_URL, BACK_URL} from '../../http'
import {useForm} from 'react-hook-form'
import Axios from 'axios'
import '../../pages/password.pages/PasswordForms.css'

const ForgotPasswordForm = () => {

    const {register, errors, handleSubmit} = useForm();
    const [admins, setAdmins] = useState([]);
    const [message, setMessage] = useState();

    useEffect(() => {
        Axios.get(`${BACK_URL}/admins`).then(res => setAdmins(res.data));
    }, [admins]);

    const onSubmit = (data) => {
        setMessage(`Un email contenant les instructions pour réinitialiser votre mot de passe viens d'être envoyé à l'adresse ${data.email}. Pensez à vérifier vos spams.`)
        const user = admins.filter(admin => admin.email === data.email);
        Axios.put(`${BACK_URL}/admins/forgotten-password`, user)
                   .then(res => res)
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
                <h1 className="text-center">Mot de passe oublié?</h1>
                <p className="font-italic text-center">Veuillez entrer votre adresse e-mail afin de recevoir un lien vous permettant de mettre à jour votre mot de passe.</p>
                {message && <p className="text-success">{message}</p>}
            </div>
            <div className="card-body">
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className="d-flex flex-column">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Adresse E-mail :</label>
                        <input 
                            type="text" 
                            className={"form-control" + (errors.email ? " is-invalid" : " ")} 
                            id="email"
                            name='email'
                            defaultValue={""}
                            ref={register({
                                required : true,
                                pattern : /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
                                validate : value => {
                                        return admins.filter(admin => admin.email === value).length > 0 
                                    }
                            })}
                        />
                        {errors.email && errors.email.type==="required" ? <div className="invalid-feedback">L'adresse email est obligatoire</div> : ''}
                        {errors.email && errors.email.type==="pattern" ? <div className="invalid-feedback">L'adresse email est invalide</div> : ''}
                        {errors.email && errors.email.type==="validate" ? <div className="invalid-feedback">Adresse email inconnue</div> : ''}
                    </div>
                    {!message ?
                    <button type="submit" className="btn btn-outline-dark mt-2">Envoyer</button>
                    :
                    <Link to='/' className="btn btn-outline-dark mt-2">Retour</Link>
                    }
                </form>
            </div>
        </div>
    )
}

export default ForgotPasswordForm
