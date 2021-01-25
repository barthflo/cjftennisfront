import React from 'react'
import ButtonUpload from '../buttons/ButtonUpload';
import {DOMAIN_URL} from '../../../http';
import {GrFormClose} from 'react-icons/gr';
import {RiFileWarningLine} from 'react-icons/ri'
import './Uploader.css';

const Uploader = ({handleChangeUpload, handleUpload, uploaded, previewUrl, photos, handleRemove, cancel, handleRemoveUploaded, error, singleUpload}) => {
    
    return (
        <div className="pictures-uploader d-flex flex-column align-items-center">
            <div className = "input-group align-items-center justify-content-center">
                <label className="text-center border w-100 p-2" htmlFor="multiUpload">{singleUpload ? "Choisissez une photo" : "Choisissez une ou plusieurs photos"}</label>
                <input 
                    className="custom-file-input"
                    style={{height:"0", width:"0"}} 
                    type="file" 
                    name="file" 
                    id="multiUpload"
                    onChange={handleChangeUpload} 
                    multiple = {singleUpload ? null : "multiple"}
                />
                {(uploaded && uploaded.length !== 0 && !singleUpload) &&
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

                {(singleUpload && uploaded && uploaded.length !== 0) &&
                    <figure style={{width:"100%", height:"100px"}} className="position-relative mx-3">
                        <img className="w-100 h-100" src={`${DOMAIN_URL}${uploaded.filePath}`} alt={uploaded.fileName} style={{objectFit:"cover"}} />
                        <div className="mask-delete-hover position-absolute w-100 h-100"></div>
                        <GrFormClose 
                            className="delete-hover position-absolute m-1" 
                            size={"1.3em"} 
                            style={{top:0, right:0}}
                            onClick={() => handleRemoveUploaded()}    
                        />
                    </figure>
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
                            {!singleUpload ?
                            previewUrl[0].map((preview, index) => preview !== "Error" ? 
                                <img src={preview} alt={preview} key={index} className="m-1" /> 
                                :
                                <div className="file-size-limit m-1 d-flex flex-column justify-content-center align-items-center position-relative">
                                    <RiFileWarningLine size={"2em"} color="#b14b32"/>
                                    <small className="text-center text-danger">Max. 5Mb</small>
                                </div>
                                )
                                :
                                <img src={previewUrl} alt={previewUrl}/>
                            }
                            
                        </div>
                        {(error && error.empty) && <p className="p-3 text-danger">{error.empty}</p>}
                        <div className="card-footer d-flex flex-column flex-sm-row-reverse justify-content-center justify-content-sm-start">
                            <ButtonUpload upload={handleUpload} class={"w-100 mb-1 mb-sm-0 ml-sm-1"}/>
                            <button className="btn btn-danger btn-sm" onClick={() => cancel()}>Annuler</button>
                        </div>
                    </div>
                    
                </div>
            }
            
        </div>
    )
}

export default Uploader
