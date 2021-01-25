import "./ArticlesPress.css";
import SectionTitle from '../../../components/section-title/SectionTitle';
import axios from 'axios';
import { BACK_URL } from '../../../http';
import { useEffect, useState } from 'react';
import ArticleCard from "../article/ArticleCard";
import _ from 'lodash'

export default function PressArticle() {
    const [pressArticles, setPressArticles] = useState([]);

    useEffect(() => {
        axios
        .get(`${BACK_URL}/articles/press`)
        .then(res => setPressArticles(res.data.filter(data => data.is_archived === 0)))
    });

    return(
        <section className={pressArticles.length === 0? "press-article-none" : "press-article"}>
            <SectionTitle title="Ils parlent de nous" color="white" />
            {pressArticles.length !== 0?
                <div className="press_article_content">
                    {_.orderBy(pressArticles, ['modified_at'], ['desc']).slice(0,2).map((article) => (
                        <ArticleCard article={article} side="left" key={article.id} />
                    ))}
                </div>
                : <p className="no-article">Pas de nouveaux articles.</p>
            }
        </section>
    );
}