import React, {Fragment, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Error from '../../errors/Error';
import RotateLoader from 'react-spinners/RotateLoader';
import Axios from 'axios';
import {BACK_URL} from '../../../../http';
import ButtonSave from '../../buttons/ButtonSave';
import ButtonBack from '../../buttons/ButtonBack';
import ButtonDelete from '../../buttons/ButtonDelete';
import ButtonCreate from '../../buttons/ButtonCreate';
import {confirmAlert} from 'react-confirm-alert';

const UpdateAccess = () => {
    const history = useHistory();
    const [datas, setDatas] = useState([]);
    const [ isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [alertMessage, setAlertMessage] = useState(null);
    const {register, errors, handleSubmit} = useForm();

    useEffect (() => {
        Axios.get(`${BACK_URL}/home/bus_access`)
             .then(res => {
                 setDatas(res.data);
                 setIsLoading(false);
             })
             .catch(err => {
                 console.log(err);
                 if(err.response){
                    setError(err.response.status);
                    setIsLoading(false);
                }
             })
    },[datas])

    useEffect(() => {
        if(history.location.state){
            setAlertMessage(() => <p className="text-success font-italic text-center font-bold">{history.location.state.message}</p>);
        }
        const timer = setTimeout(() => {
            setAlertMessage(null)
        }, 5000)
        return () => clearTimeout(timer)
    }, [history.location.state])

    const deleteAccess = (id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                  <div className='custom-ui d-flex flex-column justify-content-center align-items-center p-5 bg-light border'>
                    <h2 className="text-center mb-4">Êtes vous sûre de vouloir supprimer cette gallerie ainsi que son contenu?</h2>
                    <p className="text-center font-italic">Une fois cette action prise, il n'est pas possible de revenir en arrière</p>
                    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center w-75">
                        <button className = "btn btn-sm btn-outline-dark mb-1 mb-sm-0 mr-sm-1 w-75" onClick={onClose}>Non, annuler.</button>
                        <button
                            className="btn btn-sm btn-dark ml-sm-1 w-75"
                            onClick={() => {
                                Axios.delete(`${BACK_URL}/home/bus_access/${id}`)
                                    .then(res => console.log({status: res.status, message: res.data.successMessage}))
                                    .catch(err => console.log(err));
                                onClose();
                            }}
                        >
                        Oui, je suis sûr!
                        </button>
                    </div>
                    
                  </div>
                );
              }
        })
    }
    
    const onSubmit = (data) => {
        datas.map((item, index) => 
            Axios.put(`${BACK_URL}/home/bus_access/${item.id}`, {line : data[`line${index}`], info: data[`info${index}`]})
                 .then(res => {
                    console.log({status: res.status});
                    history.push('/admin');
                 })
                 .catch(err => {
                    console.log(err);
                    if(err.response){
                        setError(err.response.status);
                    }
                 })
        );
    }

    return (
        <section className="mt-2">
            <h1 className="text-center text-sm-left ml-sm-5 pl-sm-3 mb-3">Accessibilité</h1>
            { alertMessage && alertMessage }
            <section className="bg-light p-4 mb-2 d-flex flex-column justify-content-center align-items-center">
                    <p className="font-italic mb-0 text-center">Ajoutez une nouvelle information!</p>
                    <ButtonCreate url={`/admin/access/create`} class={"btn-sm mt-2"} title="Ajoutez!"/>
            </section>
            <div className="card">
                <div className="card-body">
                    <form id="UpdateAccess" className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
                    <Fragment> 
                        {error ? <Error status={error} /> :  
                        isLoading ? 
                            <RotateLoader size={10} color={"#345C3E"} /> 
                        : 
                        <ul className="list-group justify-content-center w-100">
                        {datas.map((data, index) => {
                            return (
                                <li className={"list-group-item m-1 w-100"} key={index}>
                                    <h2>Accès #{index +1}</h2>
                                    <div className="form-group d-flex flex-column  w-100">
                                        <label htmlFor={`line${data.id}`}><strong>Transport</strong></label>
                                        <div className="w-100">
                                            <textarea 
                                                className={"form-control" + (errors[`line${index}`] ? " is-invalid" : " ")} 
                                                name={`line${index}`}
                                                id={`line${data.id}`}
                                                defaultValue={data.line} 
                                                ref={register({
                                                    required : true
                                                })}
                                            />
                                            {errors[`line${index}`] && errors[`line${index}`].type=== "required" ? <div className="invalid-feedback">Contenu obligatoire</div>  : null}
                                        </div>
                                    </div>
                                    <div className="form-group d-flex flex-column  w-100" key={index}>
                                        <label htmlFor={`info${data.id}`}><strong>Directions</strong></label>
                                        <div className="w-100">
                                            <textarea 
                                                className={"form-control" + (errors[`info${index}`] ? " is-invalid" : " ")} 
                                                name={`info${index}`}
                                                id={`info${data.id}`}
                                                defaultValue={data.info} 
                                                ref={register({
                                                    required : true
                                                })}
                                            />
                                            {errors[`info${index}`] && errors[`info${index}`].type=== "required" ? <div className="invalid-feedback">Contenu obligatoire</div>  : null}
                                        </div>
                                    </div>
                                    <ButtonDelete title="Effacer" type="button" className="px-2 btn-sm" handleDelete={e => deleteAccess(data.id)}/>
                                </li>
                                
                                )
                            })}
                        </ul>
                        }
                        </Fragment>
                    </form>
                </div>
                <div className="card-footer d-flex flex-column flex-sm-row-reverse justify-content-start">
                    <ButtonSave form={"UpdateAccess"} class="mb-1 mb-sm-0 ml-sm-1 justify-content-center"/>
                    <ButtonBack class="mr-sm-1 justify-content-center"/>
                </div>
            </div>
        </section>
    )
}

export default UpdateAccess
