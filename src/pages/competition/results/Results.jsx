import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import { useEffect } from 'react';

function Results() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="Results">
      <BannerPhoto image="https://www.tennisnow.com/Files/nadal-on-clay-monte-carlo-2014-0417.aspx" title="Résultats" subtitle="Cjf Tennis"/>
    </div>
  );
}

export default Results;