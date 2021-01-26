import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import { useEffect } from 'react';

function LessonForAdult() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="LessonForAdult">
      <BannerPhoto image="https://media.gettyimages.com/photos/coach-giving-a-tennis-lessons-to-a-happy-group-of-people-picture-id804916954?s=612x612" title="Cours pour les Adultes" subtitle="Cjf Tennis"/>
    </div>
  );
}

export default LessonForAdult;