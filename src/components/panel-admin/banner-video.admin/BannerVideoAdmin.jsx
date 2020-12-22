import React, {Fragment, useState, useEffect} from 'react';
import {BACK_URL, DOMAIN_URL} from '../../../http';
import Axios from 'axios';
import ButtonUpdate from '../buttons/ButtonUpdate';
import RotateLoader from 'react-spinners/RotateLoader';

const BannerVideoAdmin = (props) => {

    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = () => {
            Axios.get(`${BACK_URL}/home/intro`)
                 .then(res => {
                     if(datas.length < res.data.length){
                        setDatas(res.data[0]);
                        setIsLoading(false);
                     }
                 });
        }
        fetchData();
    }, [datas]);

    return (
        <Fragment>
            {isLoading ? 
            <div className="loader-container d-flex justify-content-center align-items-center" style={{minHeight:"100px"}}>
                <RotateLoader size={10} color={"#345C3E"} /> 
            </div>
            : 
            <div className="card border-0" style={{width: props.width}}>
                <div className="card-header pb-0">
                    <h2>Vidéo Accueil</h2>
                </div>
                <div className="card-body">
                    <video className="w-100 pb-2 border-bottom" src={`${DOMAIN_URL}/upload/${datas.video_url}`} pause="true" />
                    <p className = "mb-1 mt-4"><strong>Titre : </strong>{datas.title}</p>
                    <p className ="mb-0"><strong>Sous-Titre : </strong>{datas.body}</p>
                </div>
                <div className="card-footer">
                    <ButtonUpdate url={`admin/edit/video/${datas.id}`}/>
                </div>
            </div>
            }
        </Fragment>
    )
}

export default BannerVideoAdmin;
