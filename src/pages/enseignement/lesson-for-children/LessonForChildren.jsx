import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import { useEffect } from 'react';

function LessonForChildren() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="LessonForChildren">
      <BannerPhoto image="https://www.mouratoglou.com/wp-content/uploads/2020/03/tennis-stage-enfant.jpg" title="Cours pour les Enfants" subtitle="Cjf Tennis"/>
    </div>
  );
}

export default LessonForChildren;