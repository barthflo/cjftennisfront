import React ,{Fragment} from 'react'
import {FiUpload} from 'react-icons/fi';

const ButtonUpload = (props) => {
    return (
        <div className="d-flex flex-column align-items-center">
            <button onClick={props.upload} className="btn btn-primary d-flex align-items-center">
                <FiUpload color={"white"} size={"1.3em"}/>
                <p className=" ml-2 mb-0">Télécharger</p>
            </button>
            {props.success !=null && <small className="text-light">{props.success}</small>}
        </div>
    )
}

export default ButtonUpload;