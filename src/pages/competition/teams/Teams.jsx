import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import { useEffect } from 'react';

function Teams() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="Teams">
      <BannerPhoto image="https://www.tccb.ch/wp-content/uploads/2019/12/Team-A2019.jpg" title="Equipes" subtitle="Cjf Tennis"/>
    </div>
  );
}

export default Teams;