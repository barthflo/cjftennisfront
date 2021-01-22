import {useState, useEffect, Fragment} from 'react'
import Axios from 'axios'
import {BACK_URL} from '../../../http'
import Error from '../errors/Error'
import RotateLoader from 'react-spinners/RotateLoader'
import ButtonCreate from '../buttons/ButtonCreate'
import ButtonDelete from '../buttons/ButtonDelete'
import ButtonUpdate from '../buttons/ButtonUpdate'
import AuthService from '../../../services/auth.service'
import './users.css'

const UsersList = () => {

    const [datas, setDatas] = useState([]);
    const [errors, setErrors] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const currentUser = AuthService.getUser();

    const handleDelete = (id) => {
        Axios.delete(`${BACK_URL}/admins/${id}`)
             .then(res => res)
             .catch(err => console.log(err))
    }

    useEffect(() => {
        Axios.get(`${BACK_URL}/admins`)
             .then(res => {
                setDatas(res.data.filter(data => data.id !== currentUser.id));
                setIsLoading(false);
             })
             .catch(err => {
                 setIsLoading(false);
                 setErrors(err);
             })
    }, [datas, currentUser.id]);

    return (
        <Fragment>
            <h1 className="ml-4 mt-2 mb-4 pl-sm-3">Liste des administrateurs enregistrés</h1>
            {errors && <Error status={500} />}
            {isLoading ? 
            <section className="loader-container d-flex justify-content-center align-items-center" style={{minHeight:"100px"}}>
                <RotateLoader size={10} color={"#345C3E"} /> 
            </section>
            :
            <Fragment>
                {datas.length === 0 
                ?
                <section className="card py-3 px-4">
                    <div className="card-header d-flex flex-column justify-content-center align-items-center">
                        <h2 className="text-center">Il n'y a aucun administrateur enregistré actuellement...</h2>
                        <p className="font-italic mb-0 text-center">Créez un administrateur!</p>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <ButtonCreate url={`/admin/users/create`} title="Ajouter Administrateur"/>
                    </div>
                </section>
                :
                <Fragment>
                <section className="list-group m-1 p-3 bg-light d-flex flex-column justify-content-center align-items-center">
                    <p className="font-italic mb-2 mb-sm-1 text-center">Ajoutez un administrateur!</p>
                    <ButtonCreate url={`/admin/users/create`} title="Ajouter" class="btn-sm"/>
                </section>
                <section className="card list-group d-flex flex-row flex-wrap justify-content-center">
                    {datas.length!== 0 && 
                        <div className="card-body table-responsive px-0 px-sm-2 pb-2">
                            <table className="table table-striped mb-0 admins-table">
                                <thead >
                                    <tr style={{color:"var(--light-color)", background : "var(--main-color"}}>
                                        <th scope="col">#</th>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Email</th>
                                        {window.innerWidth > 578 && 
                                        <Fragment>                             
                                            <th scope="col">Role</th>
                                            <th scope="col" className="text-right">Actions</th>
                                        </Fragment>
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas.map((data, index) => {
                                        return(
                                            <Fragment key={index}>
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                {window.innerWidth > 578 &&
                                                <Fragment>
                                                    <td className="text-capitalize">{data.role}</td>
                                                    <td className="d-flex justify-content-end pr-1">
                                                        <ButtonDelete handleDelete={e => handleDelete(data.id)} />
                                                        <ButtonUpdate class="px-1 ml-1" url={`/admin/users/edit/${data.id}`}/>
                                                    </td>
                                                </Fragment>
                                                }
                                            </tr>
                                            {window.innerWidth <= 578 &&
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td className="d-flex justify-content-end p-1 pb-0 pr-3">
                                                    <ButtonDelete handleDelete={e => handleDelete(data.id)}/>
                                                    <ButtonUpdate class="px-1 ml-1" url={`/admin/users/edit/${data.id}`}/>
                                                </td>
                                            </tr>
                                            }
                                            </Fragment>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>                        
                    }
                </section>
                </Fragment>
                }
            </Fragment>
            }
        </Fragment>
    )
}

export default UsersList
