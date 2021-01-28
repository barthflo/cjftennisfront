import {Fragment, useState} from 'react'
import {useForm} from 'react-hook-form'
import ButtonSave from '../buttons/ButtonSave'
import ButtonBack from '../buttons/ButtonBack'
import Axios from 'axios'
import {BACK_URL} from '../../../http'
import {useHistory} from 'react-router-dom'

const AccessCreate = () => {

    const {register, errors, handleSubmit} = useForm();
    const [postError, setPostError] = useState(null);
    const history = useHistory();

    const onSubmit = (data) => {
        console.log(data);
        Axios.post(`${BACK_URL}/home/bus_access`, data)
             .then(res => {
                console.log({status: res.status, message:"Datas posted successfully"})
                history.push({
                    pathname : '/admin/access/edit',
                    state : {message : "Les informations ont été créées avec succès"}
                })
             })
             .catch(err => {
                 if(err.response){
                    console.log({status: err.response.status, message: err.response.statusText })
                 }
                 setPostError({message : "Une erreur est survenue. Veuillez réessayer ultérieurement"})
             })
    }

    return (
        <Fragment>
            <section className="mt-2">
                <h1 className="text-center text-sm-left ml-sm-5 pl-sm-3 mb-3">Accessibilité</h1>
                {postError && postError.message &&
                    <p className="text-danger text-center">{postError.message}</p>
                }
            </section>
            <section className="card">
                <div className="card-body">
                    <small 
                        className="font-italic"
                        style={{color:"var(--main-color)"}}>Les champs marqués * sont obligatoires
                    </small>
                    <form 
                        id="CreateAccess"
                        className="d-flex flex-column justify-content-center align-items-center w-100 mt-3"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="form-group d-flex flex-column w-100">
                            <label 
                                htmlFor="line" 
                                className="form-label">
                                    <strong>Transport et ligne:*</strong>
                            </label>
                            <textarea 
                                className={"form-control" + (errors.line ? " is-invalid" : " ")} 
                                name="line" 
                                id="line" 
                                ref={register({
                                    required : true
                                })}
                            />
                            {errors.line && errors.line.type=== "required" ? <div className="invalid-feedback">Contenu obligatoire</div>  : null}
                        </div>
                        <div className="form-group d-flex flex-column w-100">
                            <label 
                                htmlFor="info" 
                                className="form-label">
                                    <strong>Informations d'accès:*</strong>
                            </label>
                            <textarea 
                                className={"form-control" + (errors.info ? " is-invalid" : " ")} 
                                name="info" 
                                id="info" 
                                ref={register({
                                    required : true
                                })}
                            />
                            {errors.info && errors.info.type=== "required" ? <div className="invalid-feedback">Contenu obligatoire</div>  : null}
                        </div>
                    </form>
                </div>
                <div className="card-footer d-flex flex-column flex-sm-row-reverse">
                    <ButtonSave form="CreateAccess" class="mb-1 mb-sm-0 ml-sm-1 justify-content-center"/>
                    <ButtonBack class="mr-sm-1 justify-content-center"/>
                </div>
            </section>
        </Fragment>
        
    )
}

export default AccessCreate
