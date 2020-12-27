import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import Axios from 'axios'
import {BACK_URL} from '../../../http'

const GalleryForm = (props) => {

    const {register, errors, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data);
        Axios.post(`${BACK_URL}/club/galleries`, data)
             .then(res => {
                 console.log(res);
             })
             .catch(err => console.log(err));
    }

    return (
        <form id={props.id} onSubmit={handleSubmit(onSubmit)}>
            <small className="font-italic">Les champs marqués * sont obligatoires</small>
            <div className="form-group mt-3">
                <label htmlFor="name">Nom:*</label>
                <input 
                    id="name"
                    name="name"
                    type="text" 
                    className="form-control"
                    ref={register({required : true})}
                />
                {errors.name && <small className="text-danger">Un nom est obligatoire</small>}
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea 
                    id="description" 
                    className="form-control"
                    ref={register}
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input 
                    type="text" 
                    className="form-control"
                    ref={register}
                />
            </div>
        </form>
    )
}

export default GalleryForm
