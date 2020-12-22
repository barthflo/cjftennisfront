import React, {Fragment, useState, useEffect} from 'react';
import RotateLoader from 'react-spinners/RotateLoader';
import {BACK_URL} from '../../../http';
import Axios from 'axios';
import ButtonUpdate from '../buttons/ButtonUpdate';

const IconsInfosAdmin = (props) => {

    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState('');

    useEffect(() => {
        const fetchData = () => {
            Axios.get(`${BACK_URL}/home/icons`)
                 .then(res => {
                    setDatas(res.data);
                    setIsLoading(false)
                 })
                 .catch(err => {
                    console.log(err);
                    setErrors(err);
                 })
        }
        fetchData();
    }, []);

    return (
        <Fragment>
        {isLoading ? 
            <div className="loader-container d-flex justify-content-center align-items-center" style={{minHeight:"100px"}}>
                <RotateLoader size={10} color={"#345C3E"} /> 
            </div>
        : 
            <div className="card border-0 h-100" style = {{ width:props.width}}>
                <div className="card-header pb-0">
                    <h2>Icônes Accueil</h2>
                </div>
                <div className="card-body table-responsive">
                    <table className="table table-striped">
                        <thead >
                            <tr style={{color:"var(--light-color)", background : "var(--main-color"}}>
                                <th scope="col">#</th>
                                <th scope="col">Contenu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas.map(data => {
                                return(
                                    <tr>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.body}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer">
                    <ButtonUpdate url="/admin/edit/icons"/>
                </div>
            </div>
        }
    </Fragment>
    )
}

export default IconsInfosAdmin;