import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import PresidentWord from '../../../components/president-word/PresidentWord';
import { useEffect } from 'react';

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <div className="AboutUs">
      <BannerPhoto image="https://wallpaperaccess.com/full/780473.jpg" title="A Propos de Nous" subtitle="Cjf Tennis"/>
      <PresidentWord />
    </div>
  );
}

export default AboutUs;