import './ArticleDetailsSport.css';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { BACK_URL, DOMAIN_URL } from '../../http';
import { useEffect, useState } from 'react';
import BannerPhoto from "../../components/banner-photo/BannerPhoto";
import SectionTitle from "../../components/section-title/SectionTitle";

export default function ArticleDetailsSport(){
    const params = useParams();
    const [articleSportDetails, setArticleSportDetails] = useState([]);

    useEffect(() => {
        axios
        .get(`${BACK_URL}/articles/sport/${params.id}`)
        .then(res => setArticleSportDetails(res.data))
    }, [params.id]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []); 

    return(
        <div>
            <BannerPhoto image="https://www.bellevigny.fr/wp-content/uploads/2016/06/presse.jpg" title="Article sportif" subtitle="CJF Tennis"/>
            <section className="article-sport-details">
                <SectionTitle title={articleSportDetails.title} color="white" />
                <div className="article-sport-info">
                    <img src={`${DOMAIN_URL}/upload/${articleSportDetails.image_url}`} alt={articleSportDetails.title} className="article-club-image" />
                    <p className="article-sport-desc">{articleSportDetails.description}</p>
                </div>
                <p className="article-sport-content">{articleSportDetails.body}</p>
            </section>
        </div>
    );
}