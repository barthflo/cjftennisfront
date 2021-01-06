import React , {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {BACK_URL} from '../../../../http';
import Axios from 'axios';
import authService from '../../../../services/auth.service';
import bcrypt from 'bcryptjs'


const UpdateUserForm = ({className, datas, readOnlyToggle}) => {

    const {register, errors, handleSubmit} = useForm();
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        Axios.get(`${BACK_URL}/admins`).then(res => setAdmins(res.data));
    }, []);
    console.log(datas);
    console.log(bcrypt.compareSync("password", datas.password));
    const onSubmit = async (data) =>{
        
        if(data.name === datas.name){
            delete data.name;
        }
        if(data.mail === datas.email){
            delete data.mail;
        }
        if(data.password === datas.password.substring(0,9)){
            delete data.password
        }
        console.log(data)
        // console.log(bcrypt.compareSync(data.password, datas.password));
        // await Axios.put(`${BACK_URL}/admins/${datas.id}`, data)
        //      .then(res =>{
        //         console.log(res);
        //         let user = authService.getUser().user;
        //         localStorage.setItem(JSON.parse(localStorage.getItem['user'].user), JSON.stringify(res.data));

        //      })
        //      .catch(err => console.error(err));  
    } 

    return (
        <form id="updateAdmin" className={className} onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row align-items-center justify-content-between">
                <label htmlFor="name" className="col-form-label col-sm-2">Nom :</label>
                <div className="col-sm-10">
                    <input 
                        id="name"
                        name="name"
                        type="text" 
                        // readOnly={readOnlyToggle && "form-control-plain-text"} 
                        className={(readOnlyToggle ? "form-control-plaintext" : "form-control") + (errors.name ? " is-invalid" : " ")} 
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
                <label htmlFor="mail" className="col-form-label col-sm-2">Email :</label>
                <div className="col-sm-10">
                    <input 
                        id="mail"
                        name="mail"
                        type="text" 
                        // readOnly={readOnlyToggle && "readonly"} 
                        className={"form-control" + (errors.mail ? " is-invalid" : " ")} 
                        defaultValue={datas.email}
                        ref={register({
                                required : true,
                                pattern : /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
                                validate : value => {
                                    if(value !== datas.email){
                                        return admins.filter(admin => admin.email === value).length === 0 
                                    }
                                }
                            })}
                    />
                    {errors.mail && errors.mail.type==="required" ? <div className="invalid-feedback">L'adresse email est obligatoire</div> : ''}
                    {errors.mail && errors.mail.type==="pattern" ? <div className="invalid-feedback">L'adresse email est invalide</div> : ''}
                    {errors.mail && errors.mail.type==="validate" ? <div className="invalid-feedback">L'adresse email est déjà prise</div> : ''}
                </div>
            </div>
            <div className="form-group row align-items-center justify-content-between">
                <label htmlFor="password" className="col-form-label col-sm-2">Mot de passe :</label>
                <div className="col-sm-10">
                    <input 
                        id="password"
                        name="password"
                        type="password" 
                        // readOnly={readOnlyToggle && "readonly"} 
                        className={"form-control" + (errors.password ? " is-invalid" : " ")} 
                        defaultValue={datas.password.substring(0,9)}
                        ref={register({required:true})}
                    />
                    {errors.password && <small className="text-danger">Mot de passe requis</small>}
                </div>
                
            </div>
        </form>
    )
}

export default UpdateUserForm
