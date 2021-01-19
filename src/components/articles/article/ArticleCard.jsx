import './ArticleCard.css';
import { Link } from 'react-router-dom';
import { DOMAIN_URL } from '../../../http';

export default function ArticleCard(props) {
    const { article, side, category } = props;
    return(
        <section className="article">
            <img src={`${DOMAIN_URL}/upload/${article.image_url}`} alt={article.title} className={side === "left"? "image" : "image image-right"}/>
            <div className={side === "left"? "article-info" : "article-info info-right"}>
                <h3>{article.title}</h3>
                <p className="desc">{article.description}</p>
                { article.link_url? 
                    <a href={article.link_url} className="link" target="blank">Voir l'article</a>
                    :
                    <Link className="link" 
                        to={category === "club" ? `/club/articles/article_club/id=${article.id}` : `/club/articles/article_sport/id=${article.id}`}
                    >Voir l'article</Link>
                }
            </div>
        </section>
    );
}