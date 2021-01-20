import './InfrastructureCard.css';
import { DOMAIN_URL } from '../../http';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function InfrastructureCard(props) {
    const { infrastructure } = props;

    return(
        <section className="infrastructure-card">
            <figure className="card-content">
                <Carousel showStatus={false} infiniteLoop={true}>
                    {infrastructure.pictures.map((picture, index) => (
                        <div>
                            <img src={`${DOMAIN_URL}/upload/${picture}`} alt={`Photo ${index+1}`} className="card-image" />
                        </div>
                    ))}
                </Carousel>
                <figcaption className="card-infos">
                    <blockquote className="card-infos-inf">
                        <h3 className="card-title-inf">{infrastructure.title}</h3>
                    </blockquote>
                    <p className="card-desc-inf">{infrastructure.body}</p>
                </figcaption>
            </figure>
        </section>
    );
}