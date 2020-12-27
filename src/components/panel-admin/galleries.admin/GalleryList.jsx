import React, {useState, useEffect, Fragment} from 'react';
import {BACK_URL} from '../../../http';
import Axios from 'axios';
import GalleryItem from '../../../components/panel-admin/galleries.admin/GalleryItem';
import RotateLoader from 'react-spinners/RotateLoader';
import ButtonCreate from '../../../components/panel-admin/buttons/ButtonCreate';

const GalleryList = () => {

    const [datas, setDatas] = useState([]);
    const [errors, setErrors] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        Axios.get(`${BACK_URL}/club/galleries`)
             .then(res => {
                setDatas(res.data);
                setIsLoading(false);
             })
             .catch(err => {
                 setIsLoading(false);
                 setErrors(err);
             })
    }, [datas]);

    return (
        <Fragment>
            <h1 className="ml-4 mt-2 mb-4 pl-3">Vos Galleries d'Images</h1>
            {errors && <h2>There was an error with the server</h2>}
            {isLoading ? 
            <section className="loader-container d-flex justify-content-center align-items-center" style={{minHeight:"100px"}}>
                <RotateLoader size={10} color={"#345C3E"} /> 
            </section>
            :
            <Fragment>
                {datas.length === 0 
                && 
                <section className="card py-3 px-4">
                    <div className="card-header d-flex flex-column justify-content-center align-items-center">
                        <h2>Vous n'avez pas encore d'album...</h2>
                        <p className="font-italic mb-0">Créez un album maintenant!</p>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <ButtonCreate url={`/admin/galleries/create`} title="Nouvel Album"/>
                    </div>
                </section>
                }
                <section>
                    <ul className="list-group d-flex flex-row flex-wrap justify-content-center">
                        {datas.length!== 0 && datas.map((data, index) => 
                            <li className={"list-group-item m-1 w-100 gallery-admin" + index } key={index}><GalleryItem datas={data}/></li>
                        )}
                    </ul>
                </section>
            </Fragment>
            }
        </Fragment>
    )
}

export default GalleryList
