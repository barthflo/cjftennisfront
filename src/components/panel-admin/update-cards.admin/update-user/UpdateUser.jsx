import React, { useState, useEffect, Fragment} from 'react'
import {useParams} from 'react-router-dom'
import Axios from 'axios'
import {BACK_URL} from '../../../../http'
import AuthService from '../../../../services/auth.service'
import RotateLoader from 'react-spinners/RotateLoader'
import Error from '../../errors/Error'

const UpdateUser = () => {

    const params = useParams();
    const [admin, setAdmin] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState();
    
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
        if(parseInt(params.id) === AuthService.getUser().user.id){
            fetchUser();
        } else{
            setErrors({errorStatus : 405});
            setIsLoading(false);
        }
        
    },[])
    
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
                    <div className="card-body">
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
