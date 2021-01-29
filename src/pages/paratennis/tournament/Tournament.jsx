import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import { useEffect } from 'react';

function Tournament() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="Tournament">
      <BannerPhoto image="https://www.vivrefm.com/ext/Garlic/Cms//illustrations/4f/d2/4fd2995183895dcb5d7ab8ebe5ae5c3d3f6a23d8.jpg" title="Tournois" subtitle="Cjf Tennis"/>
    </div>
  );
}

export default Tournament;