import {useState} from 'react'
import {useForm} from 'react-hook-form'
import pwGenerator from 'generate-password'
import Axios from 'axios'
import {BACK_URL} from '../../../http'
import {useHistory} from 'react-router-dom'

const UsersCreateForm = ({formId, admins}) => {

    const {register, errors, handleSubmit} = useForm();
    const [message, setMessage] = useState('');
    const history = useHistory();
    
    const onSubmit = (data) => {
        const password = pwGenerator.generate({
            length: 8,
            numbers : true
        })
        const createUser = () => {
            Axios.post(`${BACK_URL}/admins`, {name: data.name, email: data.email, password: password, role: data.role})
                 .then(res => {
                    setMessage(() => {
                        return (
                            <div className="d-flex justify-content-center">
                                <p className="text-success font-italic font-bold text-center">L'administrateur a été créé avec succès. Un email contenant son mot de passe a été envoyé à l'adresse indiquée.</p>
                            </div>
                        )
                    });
                    setTimeout(() => {
                        setMessage();
                        history.push('/admin/users');
                    }
                    , 5000);
                 })
                 .catch(err => console.log(err))  
        }
        createUser();
    }
    return (
        <form id={formId} onSubmit={handleSubmit(onSubmit)} >
            <small className="font-italic">Les champs marqués * sont obligatoires</small>
            <div className="form-group mt-3">
                <label htmlFor="name">Nom:*</label>
                <input 
                    id="name"
                    name="name"
                    type="text" 
                    className={"form-control" + (errors.name ? " is-invalid" : " ")} 
                    defaultValue=""
                    ref={register({
                        required : true,
                        minLength: 3,
                        validate: value => admins.filter(admin => admin.name === value).length === 0
                        }
                    )}
                />
                {errors.name && errors.name.type === "required" ? <div className="invalid-feedback">Nom obligatoire</div> : null }
                {errors.name && errors.name.type === "minLength" ? <div className="invalid-feedback">Minimum 3 charactères</div> : null }
                {errors.name && errors.name.type === "validate" ? <div className="invalid-feedback">Ce nom est déjà pris</div> : null }
            </div>
            <div className="form-group mt-3">
                <label htmlFor="email">Adresse Email:*</label>
                <input 
                    id="email"
                    name="email"
                    type="text" 
                    className={"form-control" + (errors.email ? " is-invalid" : " ")} 
                    defaultValue=""
                    ref={register({
                            required : true,
                            pattern : /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/, // eslint-disable-line
                            validate : value => admins.filter(admin => admin.email === value).length === 0
                        }
                    )}
                />
                {errors.email && errors.email.type==="required" ? <div className="invalid-feedback">Adresse e-mail obligatoire</div>  : null}
                {errors.email && errors.email.type==="pattern" ? <div className="invalid-feedback">Adresse e-mail incorrecte</div>  : null}
                {errors.email && errors.email.type==="validate" ? <div className="invalid-feedback">Adresse e-mail dèjà prise</div>  : null}
            </div>
            <div className="form-group mt-3">
                <label htmlFor="role">Role:</label>
                <select 
                    id="role"
                    name="role"
                    type="text" 
                    className={"form-control"} 
                    defaultValue="admin"
                    ref={register()}
                >
                    <option value="superadmin">SuperAdmin</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            {(message && message.length !== 0) && message }
        </form>
    )
}

export default UsersCreateForm
