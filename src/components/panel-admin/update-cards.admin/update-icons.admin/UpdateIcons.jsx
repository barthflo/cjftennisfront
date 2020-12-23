import React, {Fragment, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import RotateLoader from 'react-spinners/RotateLoader';
import Axios from 'axios';
import {BACK_URL} from '../../../../http';
import ButtonSave from '../../buttons/ButtonSave';
import ButtonBack from '../../buttons/ButtonBack';

const UpdateIcons = () => {

    const history = useHistory();
    const [datas, setDatas] = useState([]);
    const [ isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState('');

    useEffect (() => {
        Axios.get(`${BACK_URL}/home/icons`)
             .then(res => {
                 setDatas(res.data);
                 setIsLoading(false);
             })
             .catch(err => {
                 console.log(err);
                 setErrors(err);
             })
    },[])

    const handleChange = (e => {
        let newArr = [...datas];
        newArr[e.target.name].body = e.target.value;
        setDatas(newArr);
        }
    )
    
    const handleSubmit = (e) => {
        e.preventDefault();
        datas.map((data, index) => 
            Axios.put(`${BACK_URL}/home/icons/${data.id}`, datas[index])
                 .then(res => {
                    console.log(res);
                    history.push('/admin');
                 })
                 .catch(err => {
                    console.log(err);
                    setErrors(err);
                 })
        );
    }
    return (
        <section className="container mt-2">
            <div className="card">
                <div className="card-body">
                    <form id="UpdateIcons" className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
                    <Fragment> 
                        {errors && errors.errorMessage }   
                        {isLoading ? 
                            <RotateLoader size={10} color={"#345C3E"} /> 
                        : 
                        datas.map((data, index) => {
                            return (
                                <Fragment>
                                <div className="form-group d-flex flex-row align-items-center w-100">
                                    <label className="mb-0 pr-4" htmlFor={`content${data.id}`}><strong>#{data.id}</strong></label>
                                    <input 
                                        className = "form-control"
                                        name={index}
                                        type="text"
                                        id={`content${data.id}`}
                                        value={data.body} 
                                        onChange={handleChange}
                                    />
                                </div>
                                </Fragment>
                            )
                        })}
                        </Fragment>
                    </form>
                </div>
                <div className="card-footer d-flex flex-row-reverse justify-content-start">
                    <ButtonSave form={"UpdateIcons"} margin="ml-1"/>
                    <ButtonBack margin="mr-1"/>
                </div>
            </div>
        </section>
    )
}

export default UpdateIcons;
