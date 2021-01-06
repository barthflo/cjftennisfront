import "./ArticlesPress.css";
import SectionTitle from '../../../components/section-title/SectionTitle';
import axios from 'axios';
import { BACK_URL } from '../../../http';
import { useEffect, useState } from 'react';
import ArticleCard from "../article/ArticleCard";

export default function PressArticle() {
    const [pressArticles, setPressArticles] = useState([]);

    useEffect(() => {
        axios
        .get(`${BACK_URL}/articles/press/most_recently`)
        .then(res => setPressArticles(res.data))
    }, []);

    return(
        <section className="press-article">
            <SectionTitle title="Ils parlent de nous" color="white" />
            {pressArticles.length !== 0?
                <div className="press_article_content">
                    {pressArticles.map((article) => (
                        <ArticleCard article={article} side="left" key={article.id} />
                    ))}
                </div>
                : <p className="no-article">Pas de nouveaux articles.</p>
            }
        </section>
    );
}