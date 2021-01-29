import "./ArticlesSport.css";
import SectionTitle from '../../../components/section-title/SectionTitle';
import axios from 'axios';
import { BACK_URL } from '../../../http';
import { useEffect, useState } from 'react';
import ArticleCard from "../article/ArticleCard";
import _ from 'lodash'

export default function PressArticle() {
    const [sportArticles, setSportArticles] = useState([]);

    useEffect(() => {
        axios
        .get(`${BACK_URL}/articles/sport`)
        .then(res => setSportArticles(res.data.filter(data => data.is_archived === 0)))
    });

    return(
        <section className={sportArticles.length === 0? "sport-article-none" : "sport-article"}>
            <SectionTitle title="Vie sportive" color="gray" />
            {sportArticles.length !== 0?
                <div className="sport_article_content">
                    {_.orderBy(sportArticles, ['modified_at'], ['desc']).slice(0,2).map((article) => (
                        <ArticleCard article={article} side="right" category="sport" key={article.id} />
                    ))}
                </div> 
                : <p className="no-article">Pas de nouveaux articles.</p>}
        </section>
    );
}