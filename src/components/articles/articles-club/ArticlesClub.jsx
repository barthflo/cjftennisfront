import "./ArticlesClub.css";
import SectionTitle from '../../../components/section-title/SectionTitle';
import axios from 'axios';
import { BACK_URL } from '../../../http';
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
        <section className={clubArticles.length === 0? "club-article-none" : "club-article"}>
            <SectionTitle title="Vie du club" color="white" />
            {clubArticles.length !== 0?
                <div className="club_article_content">
                    {clubArticles.map((article) => (
                        <ArticleCard article={article} side="left" category="club" key={article.id} />
                    ))}
                </div> 
                : <p className="no-article">Pas de nouveaux articles.</p>}
        </section>
    );
}