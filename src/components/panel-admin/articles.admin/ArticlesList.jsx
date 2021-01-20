import {Fragment} from 'react'
import RotateLoader from 'react-spinners/RotateLoader'
import ButtonCreate from '../buttons/ButtonCreate'
import ArticlesItem from './ArticlesItem'
import ArchivesItem from '../archives.admin/ArchivesItem'
import {Link, useHistory} from 'react-router-dom'
import './Articles.Admin.css'

const ArticlesList = ({title, datas, route, redirect, loading, classCardHeader, classCardBody, classCardFooter, classBtnCreate}) => {
    
    const {location}= useHistory();

    return (
        <Fragment>
            {loading ? 
            <section className="loader-container d-flex justify-content-center align-items-center" style={{minHeight:"100px"}}>
                <RotateLoader size={10} color={"#345C3E"} /> 
            </section>
            : 
            <section className={"articles-list card h-100" + (!location.pathname.includes("archives") ? " border-0" : " border")}>
               {!location.pathname.includes("archives") ?
                <div className={"card-header d-flex flex-wrap justify-content-between align-items-baseline px-0 px-sm-3 " + classCardHeader }>
                    <h2 className="text-center">{title}</h2>
                    <small className="text-center font-italic">Vos derniers articles</small>
                </div>
                :
                <div className="card-header" style={{minHeight:"unset"}}>
                    <h3>{title}</h3>
                </div>
                }
                <div className={"card-body d-flex flex-column justify-content-start align-items-start px-0 px-sm-3 " + classCardBody }>
                {datas && datas.length !== 0 ? 
                    location.pathname.includes("archives") ?
                    <table className="table table-striped mb-0">
                        <thead>
                            <tr style={{color:"var(--light-color)", background : "var(--main-color"}}>
                                <th scope="col">#</th>
                                <th scope="col">Titre</th>
                                <th scope="col">Republier</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas.map((data, index) => <ArchivesItem datas={data} redirect={redirect} route={route} key={index} index={index}/>)}
                        </tbody>
                    </table>
                    :
                    datas.slice(0,2).map((data, index) => <ArticlesItem datas={data} route={route} key={index}/>)  
                :
                    <Fragment>
                            <p className="text-center text-bold align-self-center pt-3">
                                {location.pathname.includes("archives") ? "Vous n'avez archivé aucun article" : `Vous n'avez pas d'articles ${title} publiés`}
                            </p>
                            {!location.pathname.includes("archives") &&
                            <Fragment>
                                <p className="font-italic text-center align-self-center">Créez un article maintenant ou bien <Link to="/admin/archives/articles">voir les articles archivés</Link></p>
                                <div className="align-self-center">
                                    <ButtonCreate url={`/admin/galleries/create`} title="Nouvel Article" class={classBtnCreate}/>
                                </div>
                            </Fragment>
                            }    
                    </Fragment>
                }
                </div>
            </section>
            }
        </Fragment>
    )
}

export default ArticlesList
