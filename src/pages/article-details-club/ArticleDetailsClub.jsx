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
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return(
        <div>
            <BannerPhoto image="https://www.bellevigny.fr/wp-content/uploads/2016/06/presse.jpg" title="Article du club" subtitle="CJF Tennis"/>
            <section className="article-club-details">
                <SectionTitle title={articleClubDetails.title} color="white" />
                <div className="article-club-info">
                    <img src={articleClubDetails.image_url} alt={articleClubDetails.title} className="article-club-image" />
                    <p className="article-club-desc">{articleClubDetails.description}</p>
                </div>
                <p className="article-club-content">{articleClubDetails.body}</p>
            </section>
        </div>
    );
}