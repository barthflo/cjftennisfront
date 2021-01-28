import {Fragment} from 'react'
import ButtonUpdate from '../buttons/ButtonUpdate'
import ButtonDelete from '../buttons/ButtonDelete'
import {DOMAIN_URL, BACK_URL} from '../../../http'
import {Link, useHistory} from 'react-router-dom'
import Axios from 'axios'
import {confirmAlert} from 'react-confirm-alert'
import {RiCloseLine} from 'react-icons/ri'

const ArticlesItem = ({datas, route, category}) => {
    
    const year = datas.modified_at.substring(0,4);
    const month = datas.modified_at.substring(5,7);
    const day = datas.modified_at.substring(8,10);
    const hours = datas.modified_at.substring(11,13);
    const minutes = datas.modified_at.substring(14, 16);
    const {location} = useHistory()
    const urlarticles = location.pathname.includes("articles")

    const handleSubmit =(e) => {
        e.preventDefault()
        Axios.put(`${BACK_URL}${route}/${datas.id}`, {is_archived : true})
            .then(res =>{
                confirmAlert({
                    customUI: ( {onClose}) => {
                        return(
                            <div className='custom-ui d-flex flex-column justify-content-center align-items-center p-5 position-absolute' style={{width:"100%", height:"30px", left:"0", bottom:"0", background:"#303438", border:"5px solid #343a40", borderRadius:"5px"}}>
                                <RiCloseLine color={"white"} size={"1.3em"} style={{position:"absolute", top:"0", right:"0", cursor:"pointer"}} className="mt-1 mr-1" onClick={() => onClose()}/>
                                <h3 className="text-center mb-2" style={{fontFamily:"var(--main-font)", fontSize:"1em", color:"var(--light)"}}>Votre article a bien été archivé et ne sera plus visible sur la partie publique du site</h3>
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center w-75">
                                    <button
                                        className="btn btn-sm btn-dark"
                                        onClick={() => {
                                            Axios.put(`${BACK_URL}${route}/${datas.id}`, {is_archived :false})
                                                .then(res => res.status)
                                                .catch(err => console.log(err));
                                                onClose();
                                        }}
                                    >
                                    Annuler
                                    </button>  
                                </div>
                            </div>
                        )     
                    }  
                })
            })
            .catch(err => console.log(err));   
    }

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
                                Axios.delete(`${BACK_URL}/articles/${category}/${datas.id}`)
                                    .then(res => console.log(res.data.successMessage))
                                    .catch(err => console.log(err));
                                onClose();
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
        <article className="article-item-container py-3 border-bottom">
            <div className={"article-item-header " + (urlarticles ? "d-flex flex-column flex-sm-row justify-content-sm-around card-header" : "row align-items-start no-gutters")}>
                <div className={"mb-2 d-flex flex-column justify-content-start pr-2 " + (urlarticles ? "w-100 justify-content-center" : "col-sm-9 col-lg-12") }>
                    <h3><Link to={`/admin/articles/${category}/edit/${datas.id}`} className={"text-dark" + (urlarticles && " title-article")}>{datas.title}</Link></h3>
                    <small>Dernières modifications le {day}/{month}/{year} à {hours}:{minutes}</small>
                </div>
                <figure className={"img-container p-0 col-sm-3 " + (urlarticles ? "" : "col-lg-12 ")}>
                    <img src={`${DOMAIN_URL}/upload/${datas.image_url}`} alt={`Article ${datas.title} - ${datas.image_url}`}/>
                </figure>
            </div>
            <div className={"article-item-body " + (urlarticles ? "card-body" : "")}>
                <p>{urlarticles ? datas.description.substring(0,250) : datas.description.substring(0,150)}... <Link className="font-italic" to={`/admin/articles/${category}/edit/${datas.id}`}>Voir plus</Link></p>
            </div>
            <div className={"article-item-footer " + (urlarticles ? "card-footer border-0 d-flex flex-column flex-sm-row-reverse" : "")}>
                {urlarticles ? 
                <Fragment>
                    <ButtonUpdate url={`/admin/articles/${category}/edit/${datas.id}`} class="mb-1 mb-sm-0" title="Mettre à jour" />
                    <ButtonDelete className="mr-sm-1" handleDelete={deleteArticle}/>
                </Fragment>
                :
                <form >
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            type="button" 
                            name="archive" 
                            defaultValue={"Archiver"} 
                            id="article-archive" 
                            onClick={handleSubmit}
                        />
                        <label className="d-none" htmlFor="article-archive">Archiver</label>
                    </div>
                </form>
                }
            </div> 
        </article>
    )
}

export default ArticlesItem
