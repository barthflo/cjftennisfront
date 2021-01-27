import {Fragment, useState, useEffect} from 'react'
import Error from '../errors/Error'
import RotateLoader from 'react-spinners/RotateLoader'
import {BACK_URL} from '../../../http';
import Axios from 'axios';
import ButtonUpdate from '../buttons/ButtonUpdate';

const ContactAndOpeningAdmin = (props) => {

    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            Axios.get(`${BACK_URL}/contact`)
                 .then(res => {
                    setDatas(Object.entries(res.data[0]));
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

    const translateFrench = (data) => {
        switch(data){
            case "email":
                return "Adresse Mail";
            case "phone":
                return "Téléphone";
            case "week_open_at":
                return "Ouverture Semaine";
            case "week_close_at":
                return "Fermeture Semaine";
            case "saturday_open_at":
                return "Ouverture Weekend";
            case "saturday_close_at":
                return "Fermeture Weekend";
            case "address_1":
                return "Adresse";
            case "address_2":
                return "Complément d'Adresse";
            case "post_code":
                return "Code Postal";
            case "city":
                return "Ville";
            default :
                return;
        }
    }
    
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
                    <h2 className="text-capitalize">Informations et horaires</h2>
                </div>
                <div className="card-body table-responsive px-0 pb-2 px-sm-3">
                    <table className="table table-striped mb-0">
                        <thead >
                            <tr style={{color:"var(--light-color)", background : "var(--main-color"}}>
                                <th scope="col">Nom</th>
                                <th scope="col">Valeur</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas.map((data, index) => {
                                return(
                                    data[0] === 'id' ?
                                        data.delete
                                    :
                                    <tr key={index}>
                                        <th scope="row">{translateFrench(data[0])}</th>
                                        <td>{data[1]}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer d-flex flex-column flex-sm-row px-0 px-sm-3">
                    <ButtonUpdate url="/admin/opening/edit" title="Mettre à jour"/>
                </div>
            </section>
        }
    </Fragment>
    )
}

export default ContactAndOpeningAdmin
