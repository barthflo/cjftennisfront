import React, {Fragment} from 'react';
import {DOMAIN_URL} from '../../../http';

const GalleryItem = ({datas}) => {
    console.log(datas);
    return (
        <Fragment>
            <h3>{datas.name}</h3>
            <ul>
                {datas.photos && datas.photos.slice(0, 2).map((photo, index) => <li key={index}><img src={`${DOMAIN_URL}/upload/${photo}`} alt={index} style={{width:"100px", height:"75px", objectFit:"cover"}}/></li>)}
            </ul>
        </Fragment>
    )
}

export default GalleryItem;
