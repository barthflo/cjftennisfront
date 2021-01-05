import "./ArticlesSport.css";
import SectionTitle from '../../../components/section-title/SectionTitle';
import axios from 'axios';
import { BACK_URL, DOMAIN_URL } from '../../../http';
import { useEffect, useState } from 'react';
import ArticleCard from "../article/ArticleCard";

export default function PressArticle() {
    const [sportArticles, setSportArticles] = useState([]);

    useEffect(() => {
        axios
        .get(`${BACK_URL}/articles/sport/most_recently`)
        .then(res => setSportArticles(res.data))
    }, []);

    return(
        <section className="sport-article">
            <SectionTitle title="Vie sportive" color="gray" />
            {sportArticles.length != 0?
                <div className="sport_article_content">
                    {sportArticles.map((article) => (
                        <ArticleCard article={article} side="right" category="sport" key={article.id} />
                    ))}
                </div> 
                : <p className="no-article">Pas de nouveaux articles.</p>}
        </section>
    );
}