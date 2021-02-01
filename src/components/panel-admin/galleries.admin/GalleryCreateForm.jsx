import React ,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import Axios from 'axios'
import {BACK_URL} from '../../../http'
import UploadService from '../../../services/upload.service'
import Uploader from '../uploader/Uploader'
import {DatePicker} from 'antd' 
import moment from 'moment'
import locale from 'antd/es/date-picker/locale/fr_FR'

const GalleryCreateForm = ({formId}) => {

    const [files, setFiles] = useState([]);
    const [previewUrl, setPreviewUrl] = useState([]);
    const [uploaded, setUploaded] = useState([]);
    const {register, errors, handleSubmit, control} = useForm();
    const history = useHistory();
    const categories = [
        ["animations", "Animations"],
        ["school", "Ecole de Tennis"],
        ["team_young", "Equipes Jeunes"],
        ["team_adult", "Equipes Adultes"],
        ["paratennis", "Paratennis"],
        ["history", "Histoire du Club"]
    ]
    
    const handleChangeUpload = (e) => {
        let newFiles = [...files];
        newFiles.push(e.target.files);
        setFiles(newFiles);
        let newPrev = [...previewUrl];
        newPrev.push(Object.values(e.target.files).map(val => URL.createObjectURL(val)));
        setPreviewUrl(newPrev);
    }
    
    const upload = (e) => {
        e.preventDefault();
        UploadService.uploadMultiple(files[0]).then(res => {
          setFiles([]);
          setPreviewUrl([]);
          setUploaded([...uploaded].concat(res));
        })
    }

    const handleRemoveUploaded = (pictureName) => {
        setUploaded(uploaded.filter(pic => !pictureName.includes(pic.fileName)));
    }

    const onSubmit = data => {
        data.date = moment(data.date._d).format('YYYY-MM-DD HH:mm:ss')
        Axios.post(`${BACK_URL}/club/galleries`, data)
             .then(res => {
                 uploaded.forEach((upload) => {
                    Axios.post(`${BACK_URL}/club/galleries/photos`, {name : upload.fileName, gallery_id : res.data.id })
                    .then(res => console.log({status: res.status, message:res.data.successMessage}))
                    .catch(err =>console.log(err));
                 })
             history.push('/admin/galleries');
             })
             .catch(err => console.log(err));
    }

    return (
        <form id={formId} onSubmit={handleSubmit(onSubmit)}>
            <small className="font-italic" style={{color:"var(--main-color)"}}>Les champs marqués * sont obligatoires</small>
            <div className="form-group mt-3">
                <label htmlFor="name">Nom:*</label>
                <input 
                    id="name"
                    name="name"
                    type="text" 
                    className={"form-control" + (errors.name ? " is-invalid" : " ")} 
                    ref={register({required : true})}
                />
                {errors.name && errors.name.type === "required" ? <div className="invalid-feedback">Titre obligatoire</div>  : null}
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea 
                    id="description" 
                    className="form-control"
                    name="description"
                    ref={register}
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <Controller
                    as={
                        <DatePicker/>
                    }
                    name="date"
                    control={control}
                    defaultValue={moment()}
                    format="DD/MM/YYYY"
                    locale={locale}
                    className="form-control"
                />
            </div>
            <div className="form-group">
            <label htmlFor="category">Sélectionner une catégorie :*</label>
                <select 
                    className={"form-control" + (errors.category ? " is-invalid" : " ")} 
                    defaultValue="choose" 
                    id="category"
                    name="category"
                    ref={register({
                        validate : val => val !== "choose"
                    })}
                >
                    <option disabled value={"choose"}>Choisir</option>
                    {categories.map((category, index) =>
                        <option value={category[0]} key={index}>{category[1]}</option>
                    )}
                </select>
                {errors.category && errors.category.type === "validate" ? <div className="invalid-feedback">Veuillez choisir une catégorie</div>  : null}

            </div>
            <Uploader handleRemoveUploaded={handleRemoveUploaded} handleUpload={upload} handleChangeUpload={handleChangeUpload} uploaded={uploaded} previewUrl={previewUrl} />
        </form>
    )
}

export default GalleryCreateForm
