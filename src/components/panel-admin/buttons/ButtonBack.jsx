import React ,{Fragment} from 'react'
import {useHistory} from 'react-router-dom';
import {TiArrowBack} from 'react-icons/ti';
import './buttons.css';

const ButtonBack = (props) => {
    const history = useHistory();
    return (
        <Fragment>
            <button onClick={() => history.goBack()} form={props.form} className={`btn-back btn btn-sm btn-outline-dark d-flex align-items-center ${props.margin}`}>
                <TiArrowBack color={"black"} size={"1.3em"} className="btn-icon"/>
                <p className=" ml-2 mb-0">Retour</p>
            </button>
        </Fragment>
    )
}

export default ButtonBack;
