import React, { useState, useEffect, Fragment} from 'react'
import {useParams} from 'react-router-dom'
import Axios from 'axios'
import {BACK_URL} from '../../../../http'
import AuthService from '../../../../services/auth.service'
import RotateLoader from 'react-spinners/RotateLoader'
import Error from '../../errors/Error'
import UpdateUserForm from './UpdateUserForm'
import ButtonSave from '../../buttons/ButtonSave'
import {FiEdit2} from 'react-icons/fi';
import {RiCloseLine} from 'react-icons/ri';
import './UpdateUser.css'

const UpdateUser = () => {

    const params = useParams();
    const [admin, setAdmin] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState();
    const [readOnly, setReadOnly] = useState(true);

    const time = () => {
        const d = new Date();
        return d.getUTCHours() +1;
    }

    useEffect(() => {
        const fetchUser = () => {
            Axios.get(`${BACK_URL}/admins/${params.id}`)
                 .then(res => {
                    setAdmin(res.data);
                    setIsLoading(false);
                 })
                .catch(err => {
                    console.error(err);
                    setErrors(err);
                    })
            }
        if(parseInt(params.id) === AuthService.getUser().id){
            fetchUser();
        } else{
            setErrors({errorStatus : 405});
            setIsLoading(false);
        }
        
    }, [admin])
    
    return (
        <Fragment>
            {isLoading ? 
                <section className="loader-container d-flex justify-content-center align-items-center" style={{minHeight:"100px"}}>
                    <RotateLoader size={10} color={"#345C3E"} /> 
                </section> 
            :
            <Fragment>
            {errors ?
                <Error status={errors.errorStatus}/>
            :
            <section>
                <h1 className="ml-4 mt-2 mb-4 pl-sm-3 text-capitalize">{time() < 16 ? "Bonjour" : "Bonsoir" } {admin.name}!</h1>
                <div className="card py-3 px-sm-4">
                    <div className="card-header">
                        <h2>Informations relatives à votre compte</h2>
                    </div>
                    <div className="card-body">
                        <UpdateUserForm datas={admin} readOnlyToggle = {readOnly} />
                    </div>
                    <div className="card-footer d-flex flex-column flex-sm-row justify-content-end">
                        <button className={"btn d-flex justify-content-center align-items-center mr-sm-1 mb-1 mb-sm-0" + (readOnly ? " btn-light" : " btn-dark")} onClick={e => {e.preventDefault(); setReadOnly(!readOnly);}}>
                            {readOnly ? <FiEdit2 color={readOnly ? "black" : "white"} size={"1.2em"}/> : <RiCloseLine color={"white"} size={"1.3em"}/> }
                            <p className="ml-2 mb-0">Modifier</p>
                        </button>
                        <ButtonSave form={"updateAdmin"} class="justify-content-center ml-sm-1"/>
                    </div>
                </div>
            </section>
            }
            </Fragment>
        }          
        </Fragment>
    )
}

export default UpdateUser
