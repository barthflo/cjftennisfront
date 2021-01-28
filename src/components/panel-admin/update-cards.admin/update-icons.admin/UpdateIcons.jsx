import React, {Fragment, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Error from '../../errors/Error';
import RotateLoader from 'react-spinners/RotateLoader';
import Axios from 'axios';
import {BACK_URL} from '../../../../http';
import ButtonSave from '../../buttons/ButtonSave';
import ButtonBack from '../../buttons/ButtonBack';

const UpdateIcons = () => {

    const history = useHistory();
    const [datas, setDatas] = useState([]);
    const [ isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {register, errors, handleSubmit} = useForm();

    useEffect (() => {
        Axios.get(`${BACK_URL}/home/icons`)
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
    },[])

    
    const onSubmit = (data) => {
        datas.map((item, index) => 
            Axios.put(`${BACK_URL}/home/icons/${item.id}`, {body : data[index]})
                 .then(res => {
                    console.log(res.status);
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
            <h1 className="text-center text-sm-left ml-sm-5 pl-sm-3 mb-3">Icônes Accueil</h1>
            <div className="card">
                <div className="card-body">
                    <form id="UpdateIcons" className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
                    <Fragment> 
                        {error ? <Error status={error} /> :  
                        isLoading ? 
                            <RotateLoader size={10} color={"#345C3E"} /> 
                        : 
                        datas.map((data, index) => {
                            return (
                                <Fragment>
                                <div className="form-group d-flex flex-row align-items-center w-100" key={index}>
                                    <label className="mb-0 pr-4" htmlFor={`content${data.id}`}><strong>#{data.id}</strong></label>
                                    <div className="w-100">
                                        <input 
                                            className={"form-control" + (errors[index] ? " is-invalid" : " ")} 
                                            name={index}
                                            type="text"
                                            id={`content${data.id}`}
                                            defaultValue={data.body} 
                                            ref={register({
                                                required : true
                                            })}
                                        />
                                        {errors[index] && errors[index].type=== "required" ? <div className="invalid-feedback">Contenu obligatoire</div>  : null}
                                    </div>
                                </div>
                                </Fragment>
                            )
                        })}
                        </Fragment>
                    </form>
                </div>
                <div className="card-footer d-flex flex-column flex-sm-row-reverse justify-content-start">
                    <ButtonSave form={"UpdateIcons"} class="mb-1 mb-sm-0 ml-sm-1 justify-content-center"/>
                    <ButtonBack class="mr-sm-1 justify-content-center"/>
                </div>
            </div>
        </section>
    )
}

export default UpdateIcons;
