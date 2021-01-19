import './CarouselInfrastructure.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { DOMAIN_URL } from '../../http';

export default function CarouselInfrastructure(props) {
    const { pictures } = props;

    return(
        <div className="carousel-container">
            <Carousel className="carousel" showStatus={false} >
                {pictures.map((picture, index) => (
                    <div>
                        <img className="carousel-img" src={`${DOMAIN_URL}/upload/${picture}`} alt={`Photo ${index+1}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}