import React, {Fragment, useState, useEffect, createRef} from 'react';
import {BACK_URL, DOMAIN_URL} from '../../../http';
import Axios from 'axios';
import ButtonUpdate from '../buttons/ButtonUpdate';
import RotateLoader from 'react-spinners/RotateLoader';
import {FaPlay} from 'react-icons/fa';

const BannerVideoAdmin = (props) => {

    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const ref = createRef();
    
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
            <section className="loader-container d-flex justify-content-center align-items-center" style={{minHeight:"100px"}}>
                <RotateLoader size={10} color={"#345C3E"} /> 
            </section>
            : 
            <section className="card border-0 h-100" style={{width: props.width}}>
                <div className="card-header pb-0 px-0 px-sm-3">
                    <h2>Vidéo Accueil</h2>
                </div>
                <div className="card-body px-0 px-sm-3">
                    <div className="video-container position-relative" style={{cursor:"pointer"}} onClick={(e)=> ref.current.paused ? ref.current.play() : ref.current.pause()}>
                        <FaPlay 
                            color={"white"} 
                            className="position-absolute" 
                            style={{top:"50%", left:"50%", transform:"translate(-50%, -50%)", cursor:"pointer"}}
                        /> 
                        <video ref={ref} className="w-100 pb-2 border-bottom" style={{maxHeight:"175px", objectFit:"cover"}} src={`${DOMAIN_URL}/upload/${datas.video_url}`} pause="true" />
                    </div>
                    <p className = "mb-1 mt-4"><strong>Titre : </strong>{datas.title}</p>
                    <p className ="mb-0"><strong>Sous-Titre : </strong>{datas.body}</p>
                </div>
                <div className="card-footer d-flex flex-column flex-sm-row px-0 px-sm-3">
                    <ButtonUpdate url={`admin/edit/video/${datas.id}`}/>
                </div>
            </section>
            }
        </Fragment>
    )
}

export default BannerVideoAdmin;
