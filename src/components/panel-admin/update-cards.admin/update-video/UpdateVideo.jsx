import React ,{Fragment, useState, useEffect} from 'react';
import RotateLoader from 'react-spinners/RotateLoader';
import './UpdateVideo.css';
import Axios from 'axios';
import {BACK_URL, DOMAIN_URL} from '../../../../http';
import {useHistory, useParams} from 'react-router-dom';
import ButtonUpload from '../../buttons/ButtonUpload';
import ButtonSave from '../../buttons/ButtonSave';
import UploadService from '../../../../services/upload.service';
import ButtonBack from '../../buttons/ButtonBack';

const UpdateVideo = () => {

    const { id } = useParams();
    const history = useHistory();
    const [data, setData] = useState([]);
    const [ isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    
    useEffect(() => {
        const fetchData = () => {
            Axios.get(`${BACK_URL}/home/intro/${id}`)
                 .then(res => {
                     if(data.length === 0){
                        setData(res.data);
                        setIsLoading(false);
                     }
                 })
                 .catch(err => setError({errorMessage : err}));
        }
        fetchData();
        const timer = setTimeout(() => setUploadedFile({...uploadedFile, successMessage: null}), 3000);
        return () => clearTimeout(timer);
    }, [uploadedFile.successMessage]);
    
    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value});
    }

    const handleChangeUpload = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    const upload = (e) => {
        e.preventDefault();
        UploadService.upload(file).then(res => {
            if(res.errorMessage){
                setFileName(res.errorMessage);
            }else{
                const { fileName, filePath, successMessage} = res;
                setUploadedFile({fileName, filePath, successMessage});
                setData({...data, video_url : fileName})  
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.put(`${BACK_URL}/home/intro/${data.id}`, data)
             .then((res, err) => {
                if(res.status === 200){
                    history.push('/admin')
                } 
                else{
                    console.log(err);
                }
            })
    }

    return (    
        <Fragment> 
            {error && error.errorMessage }   
            <section className="video-update-container d-flex justify-content-center align-items-center">
            {isLoading ? 
                <RotateLoader size={10} color={"#345C3E"} /> 
            : 
                <Fragment>
                    <video 
                        className="video-update"
                        src={uploadedFile.filePath ? `${DOMAIN_URL}${uploadedFile.filePath}` : `${DOMAIN_URL}/upload/${data.video_url}`} 
                        autoPlay 
                        muted 
                    />
                    <div className="video-upload d-flex flex-column justify-content-center align-items-center">
                        <div className="input-group align-items-center justify-content-center">
                            <input 
                                className="custom-file-input"
                                style={{height:"0"}} 
                                type="file" 
                                name="file" 
                                id="videoUpload"
                                onChange={handleChangeUpload} 
                            />
                            <label 
                                style={{ color:"white", cursor:"pointer"}} 
                                className="mr-3 mb-0 d-flex flex-column" 
                                htmlFor="videoUpload"
                            >
                                {fileName}
                            </label>
                            <ButtonUpload upload={upload} success={uploadedFile.successMessage}/>
                        </div>
                    </div> 
                </Fragment> 
            }
            </section>
            <section className="container mt-2">
                <div className="card">
                    <div className="card-body">
                        <form id="UpdateVideo" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Titre</label>
                                <input 
                                    className = "form-control"
                                    name="title"
                                    type="text"
                                    id="title"
                                    value={data.title} 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="body">Sous-titre</label>
                                <textarea 
                                    className="form-control"
                                    name="body"
                                    id="body"
                                    value={data.body}
                                    onChange={handleChange} 
                                />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer d-flex flex-row-reverse justify-content-start">
                        <ButtonSave form={"UpdateVideo"} margin="ml-1"/>
                        <ButtonBack margin="mr-1"/>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default UpdateVideo
