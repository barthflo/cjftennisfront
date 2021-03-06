import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import './Articles.css';
import SectionTitle from '../../../components/section-title/SectionTitle';
import axios from 'axios';
import { BACK_URL } from '../../../http';
import { useEffect, useState } from 'react';
import ArticleCard from "../../../components/articles/article/ArticleCard";
import _ from 'lodash'

export default function Articles(){
    const [articleFilter, setArticleFilter] = useState([]);
    const [articleCategory, setArticleCategory] = useState("club");

    useEffect(() => {
        axios
        .get(`${BACK_URL}/articles/${articleCategory}`)
        .then(res => setArticleFilter(res.data.filter(data => data.is_archived === 0)))
    }, [articleCategory, articleFilter]);

    const handleChangeCategory = (e) => {
        setArticleCategory(e.target.value);
    }

    useEffect(() => {
    window.scrollTo(0, 0)
    }, []);

    return(
        <div className="articles-filter">
            <BannerPhoto image="https://www.bellevigny.fr/wp-content/uploads/2016/06/presse.jpg" title="Articles" subtitle="CJF Tennis"/>
            <div className="inner-width">
                <section className="container-articles">
                    <div className="header-filter">
                        <SectionTitle title="Découvrez nos articles" color="white" />
                        <div className="input-filter-articles">
                            <form className="form-articles-filter">
                                <label className="label-articles-filter">Sélectionner une catégorie :</label>
                                <select className="select-articles-filter" defaultValue={articleCategory} onChange={handleChangeCategory}>
                                    <option value="club">Club</option>
                                    <option value="sport">Sport</option>
                                    <option value="press">Presse</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    {articleFilter.length !== 0?
                    <div className="content-article-filter">
                        {_.orderBy(articleFilter, ['modified_at'], ['desc']).map((article) => (
                            <ArticleCard article={article} side="left" category={articleCategory} key={article.id} />
                        ))}
                    </div> 
                    : <p className="no-article">Pas de nouveaux articles.</p>}
                </section>
            </div>
        </div>
    );
}