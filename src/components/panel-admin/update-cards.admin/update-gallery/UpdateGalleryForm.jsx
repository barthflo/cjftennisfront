import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Axios from 'axios'
import {BACK_URL} from '../../../../http'
import UploadService from '../../../../services/upload.service'
import Uploader from '../../uploader/Uploader'

const UpdateGalleryForm = ({formId, datas}) => {
    
    const [files, setFiles] = useState([]);
    const [previewUrl, setPreviewUrl] = useState([]);
    const [uploaded, setUploaded] = useState([]);
    const [pictures, setPictures]= useState(datas.photos);
    const [removePictures, setRemovePictures] = useState([]);
    const [error, setError] = useState();
    const {register, errors, handleSubmit} = useForm();
    const history = useHistory();

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

    const handleRemove = (pictureName) => {
        if(removePictures.length === 0){
            setRemovePictures([pictureName]); 
        } else{
            setRemovePictures(removePictures => [...removePictures , pictureName]);
        } 
        setPictures(pictures.filter(pic => !pictureName.includes(pic)));
    }

    const onSubmit = data => {
        console.log(data);
        Axios.put(`${BACK_URL}/club/galleries/${datas.id}`, data)
             .then(res => console.log(res))
             .catch(err => {
                 console.log(err);
                 setError(err);
             });
        if(uploaded.length !== 0) {
            uploaded.forEach((upload) => {
                Axios.post(`${BACK_URL}/club/galleries/photos`, {name : upload.fileName, gallery_id : datas.id })
                    .then(res => console.log(res))
                    .catch(err => {
                        console.log(err);
                        setError(err);
                    });
            });
        }
        if(removePictures.length !== 0){
            removePictures.forEach((pic) => {
                Axios.delete(`${BACK_URL}/club/galleries/photos/${pic}`)
                        .then(res =>console.log(res))
                        .catch(err => {
                        console.log(err);
                        setError(err);
                    });
            });
        }
        history.push('/admin/galleries');
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
                    defaultValue={datas.name}
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
                    defaultValue={datas.description}
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input 
                    type="text" 
                    className="form-control"
                    ref={register}
                    name="date"
                    id="date"
                    defaultValue={datas.date}
                />
            </div>
            <div className="form-group">
                <label className="form-check-label font-italic">
                    <input 
                        type="checkbox" 
                        className="form-check-iput mr-1"
                        name="is_archived"
                        id="is_archived"
                        ref={register} 
                        defaultChecked={datas.is_archived} 
                    />  
                    Archivée   
                </label>
            </div>
            {error && error.errorMessage}
            <Uploader handleRemoveUploaded={handleRemoveUploaded} handleRemove={handleRemove} handleUpload={upload} handleChangeUpload={handleChangeUpload} uploaded={uploaded} previewUrl={previewUrl} photos={pictures} />
        </form>
    )
}

export default UpdateGalleryForm
