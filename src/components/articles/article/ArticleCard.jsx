import './ArticleCard.css';

export default function ArticleCard(props) {
    const { article, side } = props;
    return(
        <section className="article">
            <img src={article.image_url} alt={article.title} className={side === "left"? "image" : "image image-right"}/>
            <div className={side === "left"? "article-info" : "article-info info-right"}>
                <h3>{article.title}</h3>
                <p className="desc">{article.body}</p>
                <a href={article.link_url} className="link" target="blank">Voir l'article</a>
            </div>
        </section>
    );
}