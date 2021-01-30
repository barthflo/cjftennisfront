import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import { useEffect } from 'react';

function Agenda() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="Agenda">
      <BannerPhoto image="https://www.iftlm.fr/wp-content/uploads/sites/27/2019/12/agenda-1150x576.jpg" title="Agenda" subtitle="Cjf Tennis"/>
    </div>
  );
}

export default Agenda;