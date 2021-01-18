import React, { useState, useEffect, Fragment} from 'react'
import {useParams} from 'react-router-dom'
import Axios from 'axios'
import {BACK_URL} from '../../../http'
import RotateLoader from 'react-spinners/RotateLoader'
import Error from '../errors/Error'
import UpdateUserForm from '../update-cards.admin/update-user/UpdateUserForm'
import ButtonSave from '../buttons/ButtonSave'
import {FiEdit2} from 'react-icons/fi';
import {RiCloseLine} from 'react-icons/ri';

const UsersManage = () => {

    const [errors, setErrors] = useState();
    const [admin, setAdmin]= useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [readOnly, setReadOnly] = useState(true);
    const params = useParams();

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
            fetchUser();
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
                <div className="card py-3 px-sm-4">
                    <div className="card-header">
                        <h1>Informations Compte {admin.name}</h1>
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

export default UsersManage
