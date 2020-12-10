import React, {Fragment, useState} from 'react';
import Axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});

    const handleChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await Axios.post("http://localhost:8000/api/upload", formData, {
                headers: {
                'Content-Type' : 'multipart/form-data'
                }
            });
            const { fileName, filePath, successMessage } = res.data;
            setUploadedFile({fileName, filePath, successMessage});  
        }
        catch(err){
            if(err.response.status === 500){
                console.log('there was a problem with the server')
            } else{
                console.log(err.response.data.errorMessage);
            }
        }

        await Axios.put("http://localhost:8000/api/home/intro/1", {id:1, video_url : fileName});
    }
    return (
        <Fragment>
            <form className="mb-5" onSubmit={handleSubmit} >
                <div className="custom-file">
                <input onChange={handleChange} type="file" className="custom-file-input" name="file" id="customFile"/>
                <label htmlFor="customFile">{fileName}</label>

                <input type="submit" value="Upload" className="btn btn-primary btn-clock" />
                </div>
            </form>

            {uploadedFile.fileName ? 
            <Fragment>
            <img src={`http://localhost:3000/${uploadedFile.filePath}`} />
            <h3>{uploadedFile.successMessage}</h3>
            </Fragment>
            :
            null
            }
        </Fragment>
    )
}

export default FileUpload
