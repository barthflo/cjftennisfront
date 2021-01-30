import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import { useEffect } from 'react';

function Cotisation() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <div className="Cotisation">
      <BannerPhoto image="https://image.freepik.com/free-photo/_23-2148277750.jpg" title="Cotisation" subtitle="Cjf Tennis"/>
    </div>
  );
}

export default Cotisation;