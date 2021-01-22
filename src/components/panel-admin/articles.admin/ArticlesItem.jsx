import {DOMAIN_URL, BACK_URL} from '../../../http'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import {confirmAlert} from 'react-confirm-alert'
import {RiCloseLine} from 'react-icons/ri'

const ArticlesItem = ({datas, route}) => {
    
    const year = datas.modified_at.substring(0,4);
    const month = datas.modified_at.substring(5,7);
    const day = datas.modified_at.substring(8,10);
    const hours = datas.modified_at.substring(11,13);
    const minutes = datas.modified_at.substring(14, 16);

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

    return (
        <article className="article-item-container py-3 border-bottom">
            <div className="article-item-header row align-items-start">
                <div className="col-sm-9 col-lg-12 mb-2 d-flex flex-column justify-content-start">
                    <h3 >{datas.title}</h3>
                    <small>Dernières modifications le {day}/{month}/{year} à {hours}:{minutes}</small>
                </div>
                <figure className="img-container col-sm-3 col-lg-12 p-0">
                    <img src={`${DOMAIN_URL}/upload/${datas.image_url}`} alt={`Article ${datas.title} - ${datas.image_url}`}/>
                </figure>
            </div>
            <div className="article-item-body">
                <p>{datas.description.substring(0,150)}... <Link className="font-italic" to={`/admin/articles/edit/${datas.id}`}>Voir plus</Link></p>
            </div>
            <div className="article-item-footer">
                <form className="form-control">
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="button" 
                            name="archive" 
                            defaultChecked={datas.is_archived} 
                            id="article-archive" 
                            onClick={handleSubmit}
                        />
                        <label className="form-check-label" htmlFor="article-archive">Archiver</label>
                    </div>
                </form>
            </div> 
        </article>
    )
}

export default ArticlesItem
