import {useState, useEffect, Fragment} from 'react'
import {useHistory} from 'react-router-dom'
import Error from '../errors/Error'
import ButtonCreate from '../buttons/ButtonCreate'
import ArticlesItem from './ArticlesItem'
import RotateLoader from 'react-spinners/RotateLoader'
import {BACK_URL} from '../../../http'
import Axios from 'axios'
import _ from 'lodash'

const ArticlesContainer = () => {
    
    const {location} = useHistory();
    const [errors, setErrors] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [datas, setDatas] = useState([]);
    const [select, setSelect] = useState('club')
    const [deleteMessage, setDeleteMessage] = useState(null);

    useEffect(() => {
        const fetchArticles = () => {
            Axios.get(`${BACK_URL}/articles/${select}`)
                 .then(res => {
                    setDatas(res.data.filter(data => data.is_archived === 0))
                    setIsLoading(false);
                })
                 .catch(err => {
                    console.log(err);
                    setErrors(err.response.status);
                    setIsLoading(false);
                })
        }
        fetchArticles();
        
    }, [select, location, datas])

    useEffect(() => {
        if(location.state){
            setDeleteMessage(() => {
                return (
                    <div className="d-flex justify-content-center">
                        <p className="text-success font-italic font-bold">L'article a bien été {(location.state.messageConfirmDelete) ? "supprimé" : location.state.messageConfirmUpdate}!</p>
                    </div>
                )
            });
        }
        const timer = setTimeout(() => {
            setDeleteMessage(null)
        }, 5000)
        return () => clearTimeout(timer)
    }, [location.state])

    return(
        <Fragment>
            <div className="mx-4 mt-2 mb-2 pl-sm-3">
                <h1 >Vos Articles</h1>
                <form className="form-group mb-1">
                    <label className="d-none">Sélectionner une catégorie :</label>
                    <select className="form-control" defaultValue={select} onChange={(e) => setSelect(e.target.value)}>
                        <option value="club">Club</option>
                        <option value="sport">Sport</option>
                        <option value="press">Presse</option>
                    </select>
                </form>
                {datas.length === 0 ? null : 
                    <p className="font-italic pl-2 mb-1">{datas.length} {datas.length === 1 ? `article` : "articles"} en ligne</p>
                }
                {deleteMessage !== null && deleteMessage}
            </div>
            {errors && <Error status={errors}/>}
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
                        <h2 className="text-center">Vous n'avez pas encore d'articles...</h2>
                        <p className="font-italic mb-0 text-center">Créez un article {select === "press" ? "presse" : select} maintenant!</p>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <ButtonCreate url={`/admin/articles/${select}/create`} title="Nouvel Article"/>
                    </div>
                </section>
                :
                <Fragment>
                    <section className="list-group m-1 p-3 bg-light d-flex flex-column justify-content-center align-items-center">
                        <p className="font-italic mb-2 mb-sm-1 text-center">Ajoutez un nouvel article {select === "press" ? "presse" : select}!</p>
                        <ButtonCreate url={`/admin/articles/${select}/create`} title="Nouvel Article" class="btn-sm"/>
                    </section>
                    <ul className="list-group d-flex flex-row flex-wrap justify-content-center">
                        {datas.length!== 0 && 
                            _.orderBy(datas, ['modified_at'], ['desc'])
                                    .map((data, index) => 
                                    <li className={"list-group-item m-1 w-100 gallery-admin" + index } key={index}>
                                        <ArticlesItem datas={data} category={select} />
                                    </li>
                        )}
                    </ul>
                </Fragment>
                }
            </Fragment>
            }
        </Fragment>
    )
}

export default ArticlesContainer
