import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import { useEffect } from 'react';

function Tournaments() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="Tournaments">
      <BannerPhoto image="https://challenge-longueuil.com/wp-content/uploads/2019/02/cc-tennis-montreal.jpg" title="Tournois" subtitle="Cjf Tennis"/>
    </div>
  );
}

export default Tournaments;