import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import { useEffect } from 'react';

function TennisArmchair() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="TennisArmchair">
      <BannerPhoto image="https://assets.sport.francetvinfo.fr/sites/default/files/styles/large_16_9/public/import-articles/jeremiasz-tennis-roland-garros_543eb9a0808d787392777ac20fa560b6.jpg?itok=BvIrhQhv" title="Tennis Fauteuil" subtitle="CJF Tennis"/>
    </div>
  );
}

export default TennisArmchair;