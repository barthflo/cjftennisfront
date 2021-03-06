import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import { useEffect } from 'react';

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="Gallery">
      <BannerPhoto image="https://www.azutura.com/media/catalog/product/cache/47/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-42467_WP.jpg" title="Galerie" subtitle="Cjf Tennis"/>
    </div>
  );
}

export default Gallery;