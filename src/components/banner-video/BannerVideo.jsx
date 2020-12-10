import BannerPhoto from '../banner-photo/BannerPhoto';
import './BannerVideo.css';

export default function BannerVideo({ source, title, subtitle }){
    return(
        <section className="banner-video">
            <div className="content-video">
                <video className="video" src={source} autoPlay muted loop />
            </div>
            <div className="content">
                <h1 className="main-title">{title}</h1>
                <p className="desc">{subtitle}</p>
            </div>
        </section>
    );
}