import {useState, useEffect, Fragment} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import ButtonSave from '../../buttons/ButtonSave'
import ButtonBack from '../../buttons/ButtonBack'
import ButtonDelete from '../../buttons/ButtonDelete'
import Axios from 'axios'
import {BACK_URL} from '../../../../http'
import Error from '../../errors/Error'
import RotateLoader from 'react-spinners/RotateLoader'
import ArticlesForm from '../../articles.admin/ArticlesForm'
import {confirmAlert} from 'react-confirm-alert'
import moment from 'moment'
import 'moment/locale/fr'
import './ArticlesUpdate.css'

const ArticlesUpdate = () => {

    const {category, id } = useParams();
    const history =useHistory()
    const url = history.location.pathname;
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError]=useState(null);
    moment.locale('fr');
    
    useEffect(() => {
        const getArticle = () => {
            Axios.get(`${BACK_URL}/articles/${category}/${id}`)
                 .then(res => {
                    setArticle(res.data);
                    setIsLoading(false);
                 })
                 .catch(err => {
                    if(err.response){
                        setError(err.response.data.status);
                        setIsLoading(false);
                    }
                })
        }
        getArticle()
    }, [category, id])

    const deleteArticle = (e) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                  <div className='custom-ui d-flex flex-column justify-content-center align-items-center p-5 bg-light border'>
                    <h2 className="text-center mb-4">Êtes vous sûre de vouloir supprimer cet article ainsi que son contenu?</h2>
                    <p className="text-center font-italic">Une fois cette action prise, il n'est pas possible de revenir en arrière</p>
                    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center w-75">
                        <button className = "btn btn-sm btn-outline-dark mb-1 mb-sm-0 mr-sm-1 w-75" onClick={onClose}>Non, annuler.</button>
                        <button
                            className="btn btn-sm btn-dark ml-sm-1 w-75"
                            onClick={() => {
                                Axios.delete(`${BACK_URL}/articles/${category}/${id}`)
                                    .then(res => console.log(res.data.successMessage))
                                    .catch(err => console.log(err));
                                onClose();
                                history.push({
                                    pathname : '/admin/articles',
                                    state : { messageConfirmDelete : "Votre article a bien été supprimé" }
                                })
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
        <Fragment>
            {isLoading ?
                <section className="w-100 loader-container d-flex justify-content-center align-self-center" style={{minHeight:"100px"}}>
                    <RotateLoader size={10} color={"#345C3E"} /> 
                </section>
            :
            error ? 
                <section className="w-100 align-self-center justify-self-center">
                    <Error status={error} />
                </section>
            :
                <div>
                    <section className="mx-4 mt-2 mb-4 px-sm-3 d-flex flex-column article-update-infos">
                        <h1 className="text-capitalize">Mise à jour {article.title} </h1>
                        <p className="text-capitalize mb-1 pb-1"> Catégorie : {category}</p>
                        <small className="font-italic">Créé le {moment(article.created_at).format('ll [à] LT') }</small>
                        <small className="font-italic">Modifié le {moment(article.modified_at).format('ll [à] LT') }</small>
                    </section>
                    <div className="card py-3 px-sm-4">
                        <div className="card-body">
                            <ArticlesForm  formId={"UpdateArticle"} currentUrl={url} category={category} article={article}/>
                        </div>
                        <div className="card-footer px-sm-0 d-flex flex-column flex-sm-row-reverse">
                            <ButtonSave form={"UpdateArticle"} class=" mb-1 mb-sm-0 ml-sm-1 justify-content-center"/>
                            <ButtonDelete title="Effacer" className="mb-1 mb-sm-0 mx-sm-1 px-3" handleDelete={deleteArticle} />
                            <ButtonBack  class="mr-sm-1 justify-content-center"/>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default ArticlesUpdate
