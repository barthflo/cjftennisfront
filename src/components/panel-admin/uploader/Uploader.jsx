import React from 'react'
import ButtonUpload from '../buttons/ButtonUpload';
import {DOMAIN_URL} from '../../../http';
import {GrFormClose} from 'react-icons/gr';
import './Uploader.css';

const Uploader = ({handleChangeUpload, handleUpload, uploaded, previewUrl, photos, handleRemove, handleRemoveUploaded}) => {
    
    return (
        <div className="pictures-uploader d-flex flex-column align-items-center">
            <div className = "input-group align-items-center justify-content-center">
                <label className="text-center border w-100 p-2" htmlFor="multiUpload">Choisissez une ou plusieurs photos</label>
                <input 
                    className="custom-file-input"
                    style={{height:"0", width:"0"}} 
                    type="file" 
                    name="file" 
                    id="multiUpload"
                    onChange={handleChangeUpload} 
                    multiple
                />
                {uploaded.length !== 0 &&

                uploaded.map((image, index) => {
                    return(
                        <figure style={{width:"100px", height:"100px"}} className="position-relative mx-3" key={index}>
                            <img className="w-100 h-100" src={`${DOMAIN_URL}${image.filePath}`} alt={image.fileName} style={{objectFit:"cover"}} />
                            <div className="mask-delete-hover position-absolute w-100 h-100"></div>
                            <GrFormClose 
                                className="delete-hover position-absolute m-1" 
                                size={"1.3em"} 
                                style={{top:0, right:0}}
                                onClick={() => handleRemoveUploaded(image.fileName)}    
                            />
                        </figure>
                        )
                    })
                }
                {photos &&

                photos.map((image, index) => {
                    return(
                        <figure style={{width:"100px", height:"100px"}} className="position-relative mx-3" key={index}>
                            <img className="w-100 h-100" src={`${DOMAIN_URL}/upload/${image}`} alt={image} style={{objectFit:"cover"}} />
                            <div className="mask-delete-hover position-absolute w-100 h-100"></div>
                            <GrFormClose 
                                className="delete-hover position-absolute m-1" 
                                size={"1.3em"} 
                                style={{top:0, right:0}}
                                onClick={()=> handleRemove(image)}
                            />
                        </figure>
                        )
                    })
                }
            </div>
            {previewUrl.length !== 0 && 
                <div className="preview-container position-fixed">
                    <div className="card p3">
                        <div className="card-body d-flex flex-row flex-wrap justify-content-center">
                            {previewUrl.map((preview, index) => 
                                preview.length <=1 ? <img src={preview} alt={preview} key={index}/> : preview.map((image, index) => <img src={image} alt={image} key={index}/>)
                            )}
                        </div>
                        <div className="card-footer d-flex justify-content-center justify-content-sm-end">
                            <ButtonUpload upload={handleUpload}/>
                        </div>
                    </div>
                    
                </div>
            }
            
        </div>
    )
}

export default Uploader
