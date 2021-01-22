import React , {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {BACK_URL} from '../../../../http';
import Axios from 'axios';
import AuthService from '../../../../services/auth.service'
import {useHistory} from 'react-router-dom'


const UpdateUserForm = ({className, datas, readOnlyToggle}) => {

    const {register, errors, handleSubmit} = useForm();
    const [admins, setAdmins] = useState([]);
    const [message, setMessage] = useState();
    const currentUser = AuthService.getUser();
    const history = useHistory();

    useEffect(() => {
        Axios.get(`${BACK_URL}/admins`).then(res => setAdmins(res.data));
    }, [admins]);

    const onSubmit = async (data) =>{
        
        if(data.name === datas.name){
            delete data.name;
        }
        if(data.email === datas.email){
            delete data.email;
        }
        if(data.password.substring(0,9) === datas.password.substring(0,9)){
            delete data.password
        }
        if(Object.entries(data).length !== 0){
            await Axios.put(`${BACK_URL}/admins/${datas.id}`, data)
                .then(res =>{
                    if(res.status === 200){
                        if(currentUser.id === datas.id){
                            localStorage.setItem('user', JSON.stringify(res.data));
                        }
                        setMessage(() => {
                            return (
                                <div className="d-flex justify-content-center">
                                    <p className="text-success font-italic font-bold">L'utilisateur à été mis à jour avec succès!</p>
                                </div>
                            )
                        });
                        setTimeout(() => {
                            setMessage()
                            if(currentUser.id !== datas.id){
                                history.push('/admin/users');
                            }
                            history.push('/admin')
                        }, 5000);
                    } 
                })
                .catch(err => console.error(err)); 
        } else {
            setMessage(() => {
                return (
                    <div className="d-flex justify-content-center">
                        <p className="text-danger font-italic font-bold">Veuillez modifier au moins un champ!</p>
                    </div>
                    )
                });
        }  
    } 
    
    return (
        <form id="updateAdmin" className={className} disabled={readOnlyToggle && "disabled"} onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row align-items-center justify-content-between">
                <label htmlFor="name" className="col-form-label col-sm-2">Nom :</label>
                <div className="col-sm-10">
                    <input 
                        id="name"
                        name="name"
                        type="text" 
                        readOnly={readOnlyToggle && "read-only"} 
                        className={"form-control" + (errors.name ? " is-invalid" : " ")} 
                        defaultValue={datas.name}
                        ref={register({
                                validate : value => {
                                    if(value !== datas.name){
                                        return admins.filter(admin => admin.name === value).length === 0 
                                    } 
                                },
                                required : true
                                } 
                            )}
                    />
                    {errors.name && errors.name.type==="validate" ? <div className="invalid-feedback">Nom déjà pris</div> : ''}
                    {errors.name && errors.name.type==="required" ? <div className="invalid-feedback">Le nom est obligatoire</div> : ''}
                </div>
            </div>
            <div className="form-group row align-items-center justify-content-between">
                <label htmlFor="email" className="col-form-label col-sm-2">Email :</label>
                <div className="col-sm-10">
                    <input 
                        id="email"
                        name="email"
                        type="text" 
                        readOnly={readOnlyToggle && "readonly"} 
                        className={"form-control" + (errors.email ? " is-invalid" : " ")} 
                        defaultValue={datas.email}
                        ref={register({
                                required : true,
                                pattern : /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/, // eslint-disable-line
                                validate : value => {
                                    if(value !== datas.email){
                                        return admins.filter(admin => admin.email === value).length === 0 
                                    }
                                }
                            })}
                    />
                    {errors.email && errors.email.type==="required" ? <div className="invalid-feedback">L'adresse email est obligatoire</div> : ''}
                    {errors.email && errors.email.type==="pattern" ? <div className="invalid-feedback">L'adresse email est invalide</div> : ''}
                    {errors.email && errors.email.type==="validate" ? <div className="invalid-feedback">L'adresse email est déjà prise</div> : ''}
                </div>
            </div>
            <div className="form-group row align-items-center justify-content-between">
                <label htmlFor="password" className="col-form-label col-sm-2">Mot de passe :</label>
                <div className="col-sm-10">
                    <input 
                        id="password"
                        name="password"
                        type="password" 
                        readOnly={readOnlyToggle && "readonly"} 
                        className={"form-control" + (errors.password ? " is-invalid" : " ")} 
                        defaultValue={datas.password.substring(0,9)}
                        ref={register({required:true})}
                    />
                    {errors.password && <small className="text-danger">Mot de passe requis</small>}
                </div>    
            </div>
            {currentUser.role === "superadmin" &&
            <div className="form-group row align-items-center justify-content-between">
                <label htmlFor="role" className="col-form-label col-sm-2">Role:</label>
                <div className="col-sm-10">
                    <select 
                        id="role"
                        name="role"
                        type="text" 
                        disabled={readOnlyToggle && "disabled"}
                        className={"form-control"} 
                        defaultValue={datas.role}
                        ref={register()}
                    >
                        <option value="superadmin">SuperAdmin</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
            </div>
            }
            {message}
        </form>
    )
}

export default UpdateUserForm
