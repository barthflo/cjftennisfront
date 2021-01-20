import {Link} from 'react-router-dom'
import Axios from 'axios'
import {BACK_URL} from '../../../http'
import {confirmAlert} from 'react-confirm-alert'
import {RiCloseLine} from 'react-icons/ri'

const ArchivesItem = ({datas, route, redirect, index}) => {

    const handleSubmit =(e) => {
        e.preventDefault()
        Axios.put(`${BACK_URL}${route}/${datas.id}`, {is_archived : false})
            .then(res =>{
                console.log(res.status)
                confirmAlert({
                    customUI: ( {onClose}) => {
                        return(
                            <div className='custom-ui d-flex flex-column justify-content-center align-items-center p-5 position-absolute' style={{width:"100%", height:"30px", left:"0", bottom:"0", background:"#303438", border:"5px solid #343a40", borderRadius:"5px"}}>
                                <RiCloseLine color={"white"} size={"1.3em"} style={{position:"absolute", top:"0", right:"0", cursor:"pointer"}} className="mt-1 mr-1" onClick={() => onClose()}/>
                                <h3 className="text-center mb-2" style={{fontFamily:"var(--main-font)", fontSize:"1em", color:"var(--light)"}}>Votre archive a bien été republiée!</h3>
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center w-75">
                                    <button
                                        className="btn btn-sm btn-dark"
                                        onClick={() => {
                                            Axios.put(`${BACK_URL}${route}/${datas.id}`, {is_archived :true})
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
        <tr>
            <th scope="row">{index +1}</th>
            <td className="font-weight-bold w-100"><Link to={`${redirect}${datas.id}`}>{datas.title || datas.name}</Link></td>
            <td>
                <form className="d-flex justify-content-center">
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            name="publish" 
                            defaultChecked={!datas.is_archived} 
                            id="article-publish" 
                            onClick={handleSubmit} />
                        <label className="form-check-label d-none" htmlFor="article-publish" />
                    </div>
                </form>
            </td>
        </tr>
    )
}

export default ArchivesItem
