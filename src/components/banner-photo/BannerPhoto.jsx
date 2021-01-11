import './BannerPhoto.css';

export default function BannerPhoto({ image, title, subtitle }){
    return(
        <section className="banner-photo position-flex">
            <div className="image-bg" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`}}></div>
            <div className="content">
                <h1 className="main-title">{title}</h1>
                <p className="desc">{subtitle}</p>
            </div>
        </section>
    );
}