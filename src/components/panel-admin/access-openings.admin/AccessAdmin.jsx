import {Fragment, useState, useEffect} from 'react'
import Error from '../errors/Error'
import RotateLoader from 'react-spinners/RotateLoader'
import {BACK_URL} from '../../../http';
import Axios from 'axios';
import ButtonUpdate from '../buttons/ButtonUpdate';
import ButtonCreate from '../buttons/ButtonCreate';

const AccessAdmin = (props) => {

    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            Axios.get(`${BACK_URL}/home/bus_access`)
                 .then(res => {
                    setDatas(res.data);
                    setIsLoading(false)
                 })
                 .catch(err => {
                    console.log(err);
                    if (err.rsponse){
                        setErrors(err.response.status);
                    }
                 })
        }
        fetchData();
    }, []);

    return (
        <Fragment>
        {errors ? <Error status={errors} />
        :
        isLoading ? 
            <section className="loader-container d-flex justify-content-center align-items-center" style={{minHeight:"100px"}}>
                <RotateLoader size={10} color={"#345C3E"} /> 
            </section>
        : 
            <section className="card border-0 h-100" style = {{ width:props.width}}>
                <div className="card-header pb-0 px-0 px-sm-3">
                    <h2 className="text-capitalize">Accessibilité</h2>
                </div>
                {datas.length === 0 ?
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h2 className="text-center">Vous n'avez pas encore ajouté d'informations d'accès...</h2>
                    <p className="font-italic mb-0 text-center">Ajoutez maintenant!</p>
                    <ButtonCreate url={`/admin/access/create`} class={"btn-sm mt-2"} title="Ajoutez!"/>
                </div>
                :
                <Fragment>
                    <div className="card-body table-responsive px-0 pb-2 px-sm-3">
                        <table className="table table-striped mb-0">
                            <thead >
                                <tr style={{color:"var(--light-color)", background : "var(--main-color"}}>
                                    <th scope="col">Transport</th>
                                    <th scope="col">Directions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datas.map((data, index) => {
                                    return(
                                        <tr key={index}>
                                            <th scope="row">{data.line}</th>
                                            <td>{data.info}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer d-flex flex-column flex-sm-row px-0 px-sm-3">
                        <ButtonUpdate url="/admin/access/edit" title="Mettre à jour"/>
                    </div>
                </Fragment>
                }
            </section>
        }
    </Fragment>
    )
}

export default AccessAdmin
