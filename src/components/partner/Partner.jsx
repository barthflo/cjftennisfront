import './Partner.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SectionTitle from '../../components/section-title/SectionTitle';
import axios from 'axios';
import { BACK_URL, DOMAIN_URL } from '../../http';
import { useEffect, useState } from 'react';

export default function Partner(){
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        axios
        .get(`${BACK_URL}/home/partners`)
        .then(res => setPartners(res.data))
    }, []);

    return(
        <section className="partner-club">
            <SectionTitle title="Nos partenaires" color="white" />
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={4000}
                centerMode={false}
                className="partner-carousel"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass="slider-partner"
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 3,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 860
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  },
                  mobile: {
                    breakpoint: {
                      max: 859,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
            >
                {partners.map((partner) => (
                    <a href={partner.link_partner} target="blank" key={partner.id}>
                        <img src={`${DOMAIN_URL}/upload/${partner.image_url}`} alt={partner.name} className="image-partner"/>
                    </a>
                ))}
            </Carousel>
        </section>
    );
}