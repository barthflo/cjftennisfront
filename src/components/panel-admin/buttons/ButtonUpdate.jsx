import React ,{Fragment} from 'react'
import {RiSettings4Line} from 'react-icons/ri';
import {useHistory} from 'react-router-dom';

const ButtonUpdate = (props) => {

    const history = useHistory();
    const redirect = () => history.push(`${props.url}`);
    return (
        <Fragment>
            <button onClick={redirect} className={`btn btn-primary d-flex align-items-center justify-content-center ${props.class}`}>
                <RiSettings4Line color={"white"} size={"1.3em"}/>
                {props.title && <p className=" ml-2 mb-0">{props.title}</p>}
            </button>
        </Fragment>
    )
}

export default ButtonUpdate;
