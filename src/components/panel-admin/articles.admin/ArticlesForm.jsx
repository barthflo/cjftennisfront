import {useState, useEffect, Fragment} from 'react'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Axios from 'axios'
import {BACK_URL, DOMAIN_URL} from '../../../http'
import {Editor} from '@tinymce/tinymce-react'
import RotateLoader from 'react-spinners/RotateLoader'
import Error from '../errors/Error'
import Uploader from '../uploader/Uploader'
import UploadService from '../../../services/upload.service.jsx'

const ArticlesForm = ({formId, currentUrl, category, article}) => {

    const [tmceApiKey, setTmceApiKey] = useState('');
    const [tmceContent, setTmceContent] = useState('');
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null);
    const [file, setFile] = useState([]);
    const [previewUrl, setPreviewUrl] = useState([]);
    const [uploaded, setUploaded] = useState([]);
    const [errorImage, setErrorImage] = useState(null);
    const {register, errors, handleSubmit} = useForm();
    const history = useHistory();
    
    const getTinyMceApiKey = () => {
        Axios.get(`${BACK_URL}/secrets/tinyMce`)
             .then(res => {
                setTmceApiKey(res.data.secretKey);
                setIsloading(false);
            })
             .catch(err => console.log(err));
    }
    
    useEffect(() => {
        getTinyMceApiKey();
        if(currentUrl.includes("edit")){
            setUploaded({filePath :`/upload/${article.image_url}`})
        }
    }, []); // eslint-disable-line

    const handleEditorChange = (content, editor) => {
        setTmceContent({description : content});
    }

    const handleChangeUpload = (e) => {
        setFile(e.target.files[0]);
        setPreviewUrl((e.target.files[0].size < 5000000) ? URL.createObjectURL(e.target.files[0]) : "Error");
    }

    const upload = (e) => {
        e.preventDefault();
        UploadService.upload(file).then(res => {
          setFile([]);
          setPreviewUrl([]);
          setUploaded(res);
        })
    }

    const cancelUpload = () => {
        setPreviewUrl([]);
        setFile([]);
        setErrorImage();
    }

    const handleRemoveUploaded = () => {
        setUploaded([]);
    }

    const onSubmit = (data) => {
        setErrorImage(null);
        setError(null);
        if(!uploaded.filePath){
            setErrorImage("Une image est obligatoire")
            return;
        }
        if(currentUrl.includes("create")){
            const postArticle = () => {
                Axios.post(`${BACK_URL}/articles/${category}`, {title: data.title, description: data.intro, body:tmceContent.description, image_url : uploaded.fileName})
                     .then(res => console.log(res.data.successMessage))
                     .catch(err => {
                        console.log(err);
                        setError(err.response.status);
                    })
            }
            postArticle();
            history.push('/admin/articles');
        } 
        if(currentUrl.includes('edit')){
            const putArticle = () => {
                Axios.put(`${BACK_URL}/articles/${category}/${article.id}`, {title: data.title, description: data.intro, body:tmceContent.description, image_url : uploaded.fileName, is_archived: data.is_archived})
                     .then(res => console.log(res.data.successMessage))
                     .catch(err => {
                        console.log(err);
                        setError(err.response.status);
                    })
            }
            putArticle();

            history.push({
                pathname : '/admin/articles',
                state :  {messageConfirmUpdate : "mis à jour"} 
            })
        }
    }

    

    return (
        <Fragment>
        {isLoading ? 
            <div className="loader-container d-flex justify-content-center align-items-center" style={{minHeight:"100px"}}>
                <RotateLoader size={10} color={"#345C3E"} /> 
            </div>
            :
            error ? <Error status={error} />
            :
            <form id={formId} onSubmit = {handleSubmit(onSubmit)}>
                <small className="font-italic">Les champs marqués * sont obligatoires</small>
                <div className="form-group mt-3">
                    <label htmlFor="title">Titre:*</label>
                    <input 
                        defaultValue = {currentUrl.includes("create") ? "" : article.title }
                        id="title"
                        name="title"
                        type="text" 
                        className={"form-control" + (errors.title ? " is-invalid" : " ")} 
                        ref={register({
                            required : true,
                            maxLength : 100
                        })}
                    />
                    {errors.title && errors.title.type === "required" ? <div className="invalid-feedback">Titre obligatoire</div>  : null}
                    {errors.title && errors.title.type === "maxLength" ? <div className="invalid-feedback">Le titre est limité à 100 charactères</div>  : null}
                </div>
                <div className="form-group mt-3">
                    <div className="d-flex flex-column mb-2">
                        <label className="mb-0" htmlFor="intro">Introduction:*</label>
                        <small className="font-italic">Cette partie est la partie visible lorsque le visiteur n'a pas encore accédé à l'article spécifique</small>
                    </div>
                    <textarea 
                        defaultValue = {currentUrl.includes("create") ? "" : article.description }
                        id="intro"
                        name="intro"
                        type="text" 
                        className={"form-control" + (errors.intro ? " is-invalid" : " ")} 
                        ref={register({required : true})}
                    />
                    {errors.intro ? <div className="invalid-feedback">Introduction obligatoire</div>  : null}
                </div>
                <div className="form-group">
                    <label htmlFor="image" className={errorImage ? "is-invalid" : ''}>Image:*</label> 
                    <Uploader 
                        singleUpload={true}
                        handleRemoveUploaded={handleRemoveUploaded} 
                        handleUpload={upload} 
                        handleChangeUpload={handleChangeUpload} 
                        uploaded = {uploaded}
                        previewUrl={previewUrl}
                        cancel={cancelUpload}
                    />
                    {errorImage && <small className="invalid-feedback">{errorImage}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="description">Contenu:</label>
                    <Editor 
                        id="description"
                        name="description"
                        apiKey={tmceApiKey}
                        initialValue={currentUrl.includes("create") ? "" : article.body}
                        init={{
                            height: 500,
                            branding: false,
                            content_css:"document",
                            language: 'fr_FR',
                            language_url : "/langs/fr_FR.js",
                            directionnality: "rtl",
                            images_upload_url : `${BACK_URL}/upload`,
                            plugins: [
                                'advlist autolink image lists link charmap print preview',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime table paste code help wordcount'
                            ],
                            menubar: 'insert',
                            toolbar:
                                'undo redo | formatselect | bold italic forecolor backcolor| alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help fullscreen'
                            }}
                        onEditorChange={handleEditorChange}
                    />
                </div>
                {currentUrl.includes('edit') && 
                <div className="form-group">
                    <label className="form-check-label font-italic">
                        <input 
                            type="checkbox" 
                            className="form-check-iput mr-1"
                            name="is_archived"
                            id="is_archived"
                            ref={register} 
                            defaultChecked={article.is_archived} 
                        />  
                        Archivé  
                    </label>
                </div>
                }
                
            </form>
        }
        </Fragment>
    )
}

export default ArticlesForm
