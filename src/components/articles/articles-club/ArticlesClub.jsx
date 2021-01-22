import "./ArticlesClub.css";
import SectionTitle from '../../../components/section-title/SectionTitle';
import axios from 'axios';
import { BACK_URL } from '../../../http';
import { useEffect, useState } from 'react';
import ArticleCard from "../article/ArticleCard";
import _ from 'lodash'

export default function PressArticle() {
    const [clubArticles, setClubArticles] = useState([]);

    useEffect(() => {
        axios
        .get(`${BACK_URL}/articles/club`)
        .then(res => setClubArticles(res.data.filter(data => data.is_archived === 0)))
    });

    return(
        <section className={clubArticles.length === 0? "club-article-none" : "club-article"}>
            <SectionTitle title="Vie du club" color="white" />
            {clubArticles.length !== 0?
                <div className="club_article_content">
                    {_.orderBy(clubArticles, ['modified_at'], ['desc']).slice(0,2).map((article) => (
                        <ArticleCard article={article} side="left" category="club" key={article.id} />
                    ))}
                </div> 
                : <p className="no-article">Pas de nouveaux articles.</p>}
        </section>
    );
}