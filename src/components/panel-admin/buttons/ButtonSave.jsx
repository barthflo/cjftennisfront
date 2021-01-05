import React ,{Fragment} from 'react'
import {AiOutlineSave} from 'react-icons/ai';

const ButtonSave = (props) => {
    return (
        <Fragment>
            <button form={props.form} className={`btn btn-primary d-flex align-items-center ${props.class}`}>
                <AiOutlineSave color={"white"} size={"1.3em"}/>
                <p className=" ml-2 mb-0">Sauvegarder</p>
            </button>
        </Fragment>
    )
}

export default ButtonSave;
