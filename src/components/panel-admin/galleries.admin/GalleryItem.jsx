import React from 'react';
import {DOMAIN_URL, BACK_URL} from '../../../http';
import ButtonUpdate from '../buttons/ButtonUpdate';
import ButtonDelete from '../buttons/ButtonDelete';
import {confirmAlert} from 'react-confirm-alert';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';

import 'react-confirm-alert/src/react-confirm-alert.css';
import './GalleryItem.css'

const GalleryItem = ({datas}) => {

    const history = useHistory();

    const deleteGallery = (e) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                  <div className='custom-ui d-flex flex-column justify-content-center align-items-center p-5 bg-light border'>
                    <h2 className="text-center mb-4">Êtes vous sûre de vouloir supprimer cette gallerie ainsi que son contenu?</h2>
                    <p className="text-center font-italic">Une fois cette action prise, il n'est pas possible de revenir en arrière</p>
                    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center w-75">
                        <button className = "btn btn-sm btn-outline-dark mb-1 mb-sm-0 mr-sm-1 w-75" onClick={onClose}>Non, annuler.</button>
                        <button
                            className="btn btn-sm btn-dark ml-sm-1 w-75"
                            onClick={() => {
                                Axios.delete(`${BACK_URL}/club/galleries/${datas.id}`)
                                    .then(res => console.log(res))
                                    .catch(err => console.log(err));
                                onClose();
                            }}
                        >
                        Oui, je suis sûre!
                        </button>
                    </div>
                    
                  </div>
                );
              }
        })
    }

    return (
        <div className="gallery-item card border-0">
            <div className="card-header px-0">
                <h2>{datas.name}</h2>
                <p className="mb-0 font-italic">{datas.description}</p>
                <p className="mb-0 font-italic"><small>{datas.date}</small></p>
            </div>
            {datas.photos && 
            <div className="card-body px-0 d-flex flex-wrap">
                <div className="w-100 h-100">
                    <img 
                        src={`${DOMAIN_URL}/upload/${datas.photos[0]}`} 
                        alt={`${datas.name} ${datas.photos[0]}`}
                        className="w-100 h-100"
                        style={{objectFit:"cover"}}
                        />
                </div>
                <div className="w-100 h-100 grid-container">
                {datas.photos.slice(1, 5).map((photo, index) => 
                    <img 
                        src={`${DOMAIN_URL}/upload/${photo}`} 
                        alt={`${datas.name} ${photo}`} 
                        style={{width:"100%", height:"100%", objectFit:"cover"}}
                        id={`image${index}`}
                        key={index}
                    />
                )}
                {datas.photos.length > 4 &&
                    <div onClick = {e => history.push(`/admin/galleries/edit/${datas.id}`)} className="showmore d-flex flex-column align-items-center justify-content-center w-100 h-100">
                        <small>{datas.photos.length - 4} en plus</small>
                        <small>{datas.photos.length} total</small>
                    </div>
                }
                </div>
            </div>
            }

            <div className="card-footer px-0 d-flex flex-column flex-sm-row-reverse">
                <ButtonUpdate url={`/admin/galleries/edit/${datas.id}`} class="mb-1 mb-sm-0"/>
                <ButtonDelete className="mr-sm-1" handleDelete={deleteGallery}/>
            </div>
        </div>
    )
}

export default GalleryItem;
