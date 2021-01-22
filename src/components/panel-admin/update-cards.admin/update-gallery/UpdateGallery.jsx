import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import ButtonBack from '../../buttons/ButtonBack'
import ButtonSave from '../../buttons/ButtonSave'
import UpdateGalleryForm from './UpdateGalleryForm'
import Axios from 'axios'
import {BACK_URL} from '../../../../http'
import {RotateLoader} from 'react-spinners'
import ButtonDelete from '../../buttons/ButtonDelete'
import {confirmAlert} from 'react-confirm-alert';

const UpdateGallery = () => {

    const {id} = useParams();
    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState();
    const history = useHistory();

    useEffect(() => {
        Axios.get(`${BACK_URL}/club/galleries/${id}`)
             .then(res => {
                setDatas(res.data);
                setIsLoading(false);
             })
             .catch(err => {
                console.log(err);
                setErrors(err.errorMessage)
            })
    }, [id]); 

    const deleteGallery = (e) => {
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
                                Axios.delete(`${BACK_URL}/club/galleries/${id}`)
                                    .then(res => console.log(res))
                                    .catch(err => console.log(err));
                                onClose();
                                history.push('/admin/galleries');
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

    return (
        <section>
            <h1 className="ml-4 mt-2 mb-4 pl-sm-3">Gallerie # {id}</h1>
            {errors && <h1>{errors}</h1>}
            <div className="card py-3 px-sm-4">
                <div className="card-body">
                    {isLoading 
                    ? 
                    <section className="loader-container d-flex justify-content-center align-items-center" style={{minHeight:"100px"}}>
                        <RotateLoader size={10} color={"#345C3E"} /> 
                    </section> 
                    : 
                    <UpdateGalleryForm formId={"UpdateGallery"} datas={datas}/>
                    }
                </div>
                <div className="card-footer px-sm-0 d-flex flex-column flex-sm-row-reverse">
                    <ButtonSave form={"UpdateGallery"} class=" mb-1 mb-sm-0 ml-sm-1 justify-content-center"/>
                    <ButtonDelete title="Effacer" className="mb-1 mb-sm-0 mx-sm-1 px-3" handleDelete={deleteGallery} />
                    <ButtonBack  class="mr-sm-1 justify-content-center"/>
                    
                </div>
            </div>
        </section>
    )
}

export default UpdateGallery
