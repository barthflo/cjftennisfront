import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Error from '../../errors/Error';
import RotateLoader from 'react-spinners/RotateLoader';
import Axios from 'axios';
import {BACK_URL} from '../../../../http';
import ButtonSave from '../../buttons/ButtonSave';
import ButtonBack from '../../buttons/ButtonBack';


const UpdateOpening = () => {
    const history = useHistory();
    const [datas, setDatas] = useState([]);
    const [ isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {register, errors, handleSubmit} = useForm();

    useEffect (() => {
        Axios.get(`${BACK_URL}/contact`)
             .then(res => {
                setDatas(Object.entries(res.data[0]));
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
    
    const translateFrench = (data) => {
        switch(data){
            case "email":
                return "Adresse Mail";
            case "phone":
                return "Téléphone";
            case "week_open_at":
                return "Ouverture Semaine";
            case "week_close_at":
                return "Fermeture Semaine";
            case "saturday_open_at":
                return "Ouverture Weekend";
            case "saturday_close_at":
                return "Fermeture Weekend";
            case "address_1":
                return "Adresse";
            case "address_2":
                return "Complément d'Adresse";
            case "post_code":
                return "Code Postal";
            case "city":
                return "Ville";
            default :
                return;
        }
    }

    const onSubmit = (data) => {
        console.log(data)
        Axios.put(`${BACK_URL}/contact/${datas[0][1]}`, data)
                .then(res => {
                    console.log({status: res.status, message: "data updated succesfully"});
                    history.push('/admin');
                    })
                .catch(err => {
                console.log(err);
                    if(err.response){
                        setError(err.response.status);
                    }
            })
    }

    return (
        <section className="mt-2">
            <h1 className="text-center text-sm-left ml-sm-5 pl-sm-3 mb-3">Horaires et Informations Générales</h1>
            <div className="card">
                <div className="card-body">
                    <small 
                        className="font-italic"
                        style={{color:"var(--main-color)"}}
                    >
                        Tous les champs sont obligatoires
                    </small>
                    <form id="UpdateOpening" className="d-flex flex-column justify-content-center align-items-center mt-2" onSubmit={handleSubmit(onSubmit)}>
                        {error ? <Error status={error} /> :  
                        isLoading ? 
                            <RotateLoader size={10} color={"#345C3E"} /> 
                        : 
                        datas.map((data, index) => {
                            return(
                                data[0] === 'id' ?
                                    data.delete
                                :
                                <div className="form-group d-flex flex-column  w-100" key={index}>
                                    <label htmlFor={data[0]}><strong>{translateFrench(data[0])}</strong></label>
                                    <div className="w-100">
                                        <input 
                                            className={"form-control" + (errors[data[0]] ? " is-invalid" : " ")} 
                                            name={data[0]}
                                            id={data[0]}
                                            defaultValue={data[1]} 
                                            ref={register({
                                                required : true
                                            })}
                                        />
                                        {errors[data[0]] && errors[data[0]].type=== "required" ? <div className="invalid-feedback">Contenu obligatoire</div>  : null}
                                    </div>
                                </div>
                            )}
                        )}
                    </form>
                </div>
                <div className="card-footer d-flex flex-column flex-sm-row-reverse justify-content-start">
                    <ButtonSave form={"UpdateOpening"} class="mb-1 mb-sm-0 ml-sm-1 justify-content-center"/>
                    <ButtonBack class="mr-sm-1 justify-content-center"/>
                </div>
            </div>
        </section>
    )
}

export default UpdateOpening

