import './BannerPhoto.css';

export default function BannerPhoto({ image, title, subtitle }){
    return(
        <section className="banner-photo">
            <img src={image} alt={subtitle} className="image-bg"/>
            <div className="content">
                <h1 className="main-title">{title}</h1>
                <p className="desc">{subtitle}</p>
            </div>
        </section>
    );
}