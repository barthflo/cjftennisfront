import './ArticleDetailsClub.css';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { BACK_URL, DOMAIN_URL } from '../../http';
import { useEffect, useState } from 'react';
import BannerPhoto from "../../components/banner-photo/BannerPhoto";
import SectionTitle from "../../components/section-title/SectionTitle";

export default function ArticleDetailsClub(){
    const params = useParams();
    const [articleClubDetails, setArticleClubDetails] = useState([]);

    useEffect(() => {
        axios
        .get(`${BACK_URL}/articles/club/${params.id}`)
        .then(res => setArticleClubDetails(res.data))
    }, [params.id]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return(
        <div>
            <BannerPhoto image="https://www.bellevigny.fr/wp-content/uploads/2016/06/presse.jpg" title="Article du club" subtitle="CJF Tennis"/>
            <section className="article-club-details">
                <SectionTitle title={articleClubDetails.title} color="white" />
                <div className="article-club-info">
                    <img src={`${DOMAIN_URL}/upload/${articleClubDetails.image_url}`} alt={articleClubDetails.title} className="article-club-image" />
                    <p className="article-club-desc">{articleClubDetails.description}</p>
                </div>
                <div className="article-club-content" dangerouslySetInnerHTML={{__html : articleClubDetails.body }}></div>
            </section>
        </div>
    );
}