import "./ArticlesClub.css";
import SectionTitle from '../../../components/section-title/SectionTitle';
import axios from 'axios';
import { BACK_URL, DOMAIN_URL } from '../../../http';
import { useEffect, useState } from 'react';
import ArticleCard from "../article/ArticleCard";

export default function PressArticle() {
    const [clubArticles, setClubArticles] = useState([]);

    useEffect(() => {
        axios
        .get(`${BACK_URL}/articles/club/most_recently`)
        .then(res => setClubArticles(res.data))
    }, []);

    return(
        <section className="club-article">
            <SectionTitle title="Vie du club" color="white" />
            <div className="club_article_content">
                {clubArticles.map((article) => (
                    <ArticleCard article={article} side="left" category="club" key={article.id} />
                ))}
            </div>
        </section>
    );
}