import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import SportCalendar from"../../../components/calendar-comp/SportCalendar";
import { useEffect } from 'react';

function Calendar() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main className="Calendar">
      <BannerPhoto image="https://u-paris.fr/wp-content/uploads/2019/02/Sans-titre-68.jpg" title="Calendrier" subtitle="Cjf Tennis"/>
      <SportCalendar/>
    </main>
  );
}

export default Calendar;