import './OurClub.css';
import axios from 'axios';
import { BACK_URL, DOMAIN_URL } from '../../http';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../section-title/SectionTitle';

export default function OurClub() {
    const [infoClub, setInfoClub] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const [pictures, setPictures] = useState();
    const indexPictures = [];

    useEffect(() => {
        axios
        .get(`${BACK_URL}/home/infos`)
        .then(res => {
            setInfoClub(res.data[0]);
            let pics = [];
            for (let i = 0; i < 3; i++) {
                let random = Math.floor(Math.random() * res.data[0].pictures.length);
                while(indexPictures.includes(random)){
                    random = Math.floor(Math.random() * res.data[0].pictures.length);
                }
                pics.push(res.data[0].pictures[random]);
                indexPictures.push(random);
            }
            setPictures(pics);
        });
        setLoading(true);
    }, []);

    return isLoading ? (
        <section className="our-club">
            <div className="our-club-content">
                <div className="our-club-info">
                    <SectionTitle className="main-title" title="Notre club" color="gray" />
                    <h2 className="our-club-title">{infoClub.title}</h2>
                    <p className="our-club-desc">{infoClub.body}</p>
                    <Link className="link" to="/club/our-infrastructures">Nos infrastructures</Link>
                </div>
                {(pictures && pictures.length !== 0) && pictures.map((picture, index) => (
                    <img className={`our-club-image image-${index}`} src={`${DOMAIN_URL}/upload/${picture}`} alt={`Photo ${index+1} des infrastructures`} />
                ))}
            </div>
        </section>
    ) : <p className="no-article">Chargement des données...</p>;
}