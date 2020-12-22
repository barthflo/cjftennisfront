import React ,{Fragment} from 'react'
import {FiUpload} from 'react-icons/fi';

const ButtonUpload = (props) => {
    return (
        <Fragment>
            <button onClick={props.upload} className="btn btn-primary d-flex align-items-center">
                <FiUpload color={"white"} size={"1.3em"}/>
                <p className=" ml-2 mb-0">Télécharger</p>
            </button>
        </Fragment>
    )
}

export default ButtonUpload;