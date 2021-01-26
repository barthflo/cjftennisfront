import ButtonSave from '../buttons/ButtonSave'
import ButtonBack from '../buttons/ButtonBack'
import { useParams, useHistory } from 'react-router-dom'
import ArticlesForm from './ArticlesForm'


const ArticlesCreate = () => {

    const category = useParams().category;
    const url = useHistory().location.pathname;
    
    return (
        <section>
            <h1 className="ml-4 mt-2 mb-4 pl-sm-3 text-capitalize">Nouvel Article {(category === "press") ? "Presse" : category} </h1>
            <div className="card py-3 px-sm-4">
                <div className="card-body">
                    <ArticlesForm  formId={"CreateArticle"} currentUrl={url} category={category}/>
                </div>
                <div className="card-footer px-sm-0 d-flex flex-column flex-sm-row-reverse">
                    <ButtonSave form={"CreateArticle"} class=" mb-1 mb-sm-0 ml-sm-1 justify-content-center"/>
                    <ButtonBack  class="mr-sm-1 justify-content-center"/>
                </div>
            </div>
        </section>
    )
}

export default ArticlesCreate
