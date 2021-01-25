import './AccessClub.css';
import SectionTitle from '../section-title/SectionTitle';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACK_URL } from '../../http';

export default function AccessClub(){
    const [infoAccess, setInfoAccess] = useState([]);
    const [busAccess, setBusAccess] = useState([]);

    const [isLoadingAccess, setIsLoadingAccess] = useState(true);
    const [isLoadingBus, setIsLoadingBus] = useState(true);

    useEffect(() => {
        const fetchAccess = () => {
            axios
            .get(`${BACK_URL}/contact`)
            .then(res => {
                setInfoAccess(res.data[0]);
                setIsLoadingAccess(false);
            })
        };
        fetchAccess();
    }, [])

    useEffect(() => {
        const fetchBus = () => {
            axios
            .get(`${BACK_URL}/home/bus_access`)
            .then(res => {
            setBusAccess(res.data);
            setIsLoadingBus(false);
        })
        };
        fetchBus();
    }, [])

    return(
        <section className="access-container">
            <SectionTitle title="Nous rejoindre" color="white" />
            <div className="access-content">
                <div className="access-info">
                    <div className="access-adress">
                        <div className="address">
                            <p><span className="bold-text">{isLoadingAccess? "Is loading" : infoAccess.address_1}</span></p>
                            <p><span className="bold-text">{isLoadingAccess? "Is loading" : `${infoAccess.address_2} ${infoAccess.post_code} ${infoAccess.city}`}</span></p>
                        </div>
                        <p>{isLoadingAccess? "Is loading" : infoAccess.phone}</p>
                        <p>{isLoadingAccess? "Is loading" : infoAccess.email}</p>
                    </div>
                    <div className="access-time">
                        <p>Du Lundi au Vendredi : de {isLoadingAccess? "Is loading" : infoAccess.week_open_at} à {isLoadingAccess? "Is loading" : infoAccess.week_close_at}</p>
                        <p>Du Samedi au Dimanche : de {isLoadingAccess? "Is loading" : infoAccess.saturday_open_at} à {isLoadingAccess? "Is loading" : infoAccess.saturday_close_at}</p>
                    </div>
                    <div className="access-travel">
                        {isLoadingBus ?
                            <p>Is loading</p> 
                            :
                            busAccess.map((bus) => (
                                <div className="bus" key={bus.id}>
                                    <p><span className="bold-text">{bus.line}</span></p> 
                                    <p>{bus.info}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="map-card">
                <iframe title="carte interactive" width="425" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=1.890555024147034%2C47.95770754779015%2C1.8976360559463503%2C47.96112384332174&amp;layer=mapnik&amp;marker=47.95941751995403%2C1.894095540046692"/>
                    <small>
                        <a href="https://www.openstreetmap.org/?mlat=47.95942&amp;mlon=1.89410#map=18/47.95942/1.89410" target="blank">
                            Afficher une carte plus grande
                        </a>
                    </small>
                </div>
            </div>
        </section>
    );
}
