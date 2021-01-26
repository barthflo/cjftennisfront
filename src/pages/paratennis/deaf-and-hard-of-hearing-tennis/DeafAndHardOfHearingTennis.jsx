import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import { useEffect } from 'react';

function DeafAndHardOfHearingTennis() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="DeafAndHardOfHearingTennis">
      <BannerPhoto image="https://sf.sports.fr/wp-content/uploads/2019/08/Duckhee-Lee-750x368.jpg" title="Tennis sourd et malentendant" subtitle="Cjf Tennis"/>
    </div>
  );
}

export default DeafAndHardOfHearingTennis;