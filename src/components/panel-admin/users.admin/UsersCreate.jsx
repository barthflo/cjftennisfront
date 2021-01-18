import {useState, useEffect, Fragment} from 'react'
import RotateLoader from 'react-spinners/RotateLoader'
import Axios from 'axios'
import {BACK_URL} from '../../../http'
import ButtonBack from '../buttons/ButtonBack'
import ButtonSave from '../buttons/ButtonSave'
import UsersCreateForm from './UsersCreateForm'
import Error from '../errors/Error'

const UsersCreate = () => {

    const [admins, setAdmins] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const fetchAdmins = () => {
        Axios.get(`${BACK_URL}/admins`)
             .then(res => {
                 setAdmins(res.data);
                 setIsLoading(false);
             })
             .catch(err => {
                console.log(err);
                setError(err);
            })
    }

    useEffect(() => {
        fetchAdmins();
    }, [])
    
    return (
        <Fragment>
            <h1 className="ml-4 mt-2 mb-4 pl-sm-3">Nouvel Administrateur</h1>
            {error && <Error status={500} />}
            {isLoading ? 
                <section className="loader-container d-flex justify-content-center align-items-center" style={{minHeight:"100px"}}>
                    <RotateLoader size={10} color={"#345C3E"} /> 
                </section>
                :
                <section className="card py-3 px-sm-4">
                    <div className="card-body">
                        <UsersCreateForm formId={"CreateGallery"} admins={admins} />
                        
                    </div>
                    <div className="card-footer px-sm-0 d-flex flex-column flex-sm-row-reverse">
                        <ButtonSave form={"CreateGallery"} class=" mb-1 mb-sm-0 ml-sm-1 justify-content-center"/>
                        <ButtonBack  class="mr-sm-1 justify-content-center"/>
                    </div>
                </section>
            }
        </Fragment>
    )
}

export default UsersCreate
