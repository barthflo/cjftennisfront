import React ,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Axios from 'axios'
import {BACK_URL} from '../../../http'
import UploadService from '../../../services/upload.service';
import Uploader from '../uploader/Uploader';

const GalleryCreateForm = ({formId}) => {

    const [files, setFiles] = useState([]);
    const [previewUrl, setPreviewUrl] = useState([]);
    const [uploaded, setUploaded] = useState([]);
    const history = useHistory();
    const {register, errors, handleSubmit} = useForm();
    
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
        Axios.post(`${BACK_URL}/club/galleries`, data)
             .then(res => {
                 uploaded.forEach((upload) => {
                    Axios.post(`${BACK_URL}/club/galleries/photos`, {name : upload.fileName, gallery_id : res.data.id })
                    .then(res => console.log(res))
                    .catch(err =>console.log(err));
                 })
             history.push('/admin/galleries');
             })
             .catch(err => console.log(err));
    }

    return (
        <form id={formId} onSubmit={handleSubmit(onSubmit)}>
            <small className="font-italic">Les champs marqués * sont obligatoires</small>
            <div className="form-group mt-3">
                <label htmlFor="name">Nom:*</label>
                <input 
                    id="name"
                    name="name"
                    type="text" 
                    className="form-control"
                    ref={register({required : true})}
                />
                {errors.name && <small className="text-danger">Un nom est obligatoire</small>}
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
                <input 
                    type="text" 
                    className="form-control"
                    ref={register}
                    name="date"
                />
            </div>
            <Uploader handleRemoveUploaded={handleRemoveUploaded} handleUpload={upload} handleChangeUpload={handleChangeUpload} uploaded={uploaded} previewUrl={previewUrl} />
        </form>
    )
}

export default GalleryCreateForm
