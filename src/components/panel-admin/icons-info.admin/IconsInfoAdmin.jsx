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
        {errors && errors.errorMessage}
        {isLoading ? 
            <section className="loader-container d-flex justify-content-center align-items-center" style={{minHeight:"100px"}}>
                <RotateLoader size={10} color={"#345C3E"} /> 
            </section>
        : 
            <section className="card border-0 h-100" style = {{ width:props.width}}>
                <div className="card-header pb-0 px-0 px-sm-3">
                    <h2>Icônes Accueil</h2>
                </div>
                <div className="card-body table-responsive px-0 pb-2 px-sm-3">
                    <table className="table table-striped mb-0">
                        <thead >
                            <tr style={{color:"var(--light-color)", background : "var(--main-color"}}>
                                <th scope="col">#</th>
                                <th scope="col">Contenu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas.map((data, index) => {
                                return(
                                    <tr key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.body}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer d-flex flex-column flex-sm-row px-0 px-sm-3">
                    <ButtonUpdate url="/admin/edit/icons"/>
                </div>
            </section>
        }
    </Fragment>
    )
}

export default IconsInfosAdmin;