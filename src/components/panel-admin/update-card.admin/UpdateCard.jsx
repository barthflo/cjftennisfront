import React ,{Fragment, useState, useEffect} from 'react';
import FileUpload from '../FileUpload';
import './UpdateCard.css';
import Axios from 'axios';
import {BACK_URL} from '../../../http';
import {useHistory, useParams} from 'react-router-dom';

const UpdateCard = ({url}) => {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [ isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    const [inputs, setInputs] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            Axios.get(`${BACK_URL}/home/intro/${id}`)
                 .then(res => {
                     if(data.length === 0){
                        setData(res.data);
                        setIsLoading(false);
                     }
                 });
        }
        fetchData();
        setInputs(data);
    }, [data]);
    console.log(data);
    
    
    
    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.put(`${BACK_URL}/home/intro/${data.id}`, inputs)
             .then((res, err) => {
                console.log(res.status);
                console.log(err);
                if(res.status === 200){
                    history.push('/admin')
                } 
                else{
                    console.log("Error");
                }
            })
    }

    return (
        <Fragment>
            {data.video_url && 
            <div className="video-update-container" >
                <video 
                    className="video-update"
                    src={`${url}/upload/${data.video_url}`} 
                    autoPlay 
                    muted 
                />
                <div className="video-upload d-flex justify-content-center align-items-center">
                    <FileUpload />
                </div>    
            </div>
            }
            <div className="container mt-2">
                <div className="card">
                    <div className="card-body">
                        <form className="form-group" id="UpdateVideo" onSubmit={handleSubmit}>
                            <label htmlFor="title">Titre</label>
                            <input 
                                className = "form-control"
                                name="title"
                                type="text"
                                id="title"
                                value={inputs.title} 
                                onChange={handleChange}
                            />
                            <label htmlFor="body">Sous-titre</label>
                            <textarea 
                                className="form-control"
                                name="body"
                                id="body"
                                value={inputs.body}
                                onChange={handleChange} />
                        </form>
                    </div>
                    <div className="card-footer d-flex justify-content-end">
                        <button className="btn btn-primary" type="submit" form="UpdateVideo">Sauvegarder</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default UpdateCard
