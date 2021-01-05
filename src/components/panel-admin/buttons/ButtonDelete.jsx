import React ,{Fragment} from 'react'
import {RiDeleteBinLine} from 'react-icons/ri';

const ButtonDelete = ({handleDelete, title, className }) => {

    return (
        <Fragment>
            <button onClick={handleDelete} className={`btn btn-danger px-1 d-flex align-items-center justify-content-center ${className}`}>
                <RiDeleteBinLine color={"white"} size={"1.3em"}/>
                {title &&
                <p className=" ml-2 mb-0">{title}</p>
                }
            </button>
        </Fragment>
    )
}

export default ButtonDelete;
