import React ,{Fragment} from 'react'
import {useHistory} from 'react-router-dom';
import {MdLibraryAdd} from 'react-icons/md';
import './buttons.css';

const ButtonCreate = (props) => {
    const history = useHistory();
    return (
        <Fragment>
            <button onClick={() => history.push(`${props.url}`)} form={props.form} className={`btn-create btn btn-primary d-flex align-items-center ${props.margin}`}>
                <MdLibraryAdd size={"1.3em"} className="btn-icon text-light"/>
                <p className=" ml-2 mb-0">{props.title}</p>
            </button>
        </Fragment>
    )
}

export default ButtonCreate;
