import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import TeachingTeam from "../../../components/teaching/teaching_team/Teaching_Team";
import Teaching_Team from "../../../components/teaching/teaching_team/Teaching_Team";
import Assistant_Teaching_Team from '../../../components/teaching/teaching_team/Assistant_Teaching_Team';
import './Teaching_Team.css';
import SectionTitle from "../../../components/section-title/SectionTitle";
import { useEffect } from 'react';

function TeamTeaching() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main className="TeamTeaching">
      <BannerPhoto image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/135617429/original/ed8df4e402c3cec184266e41a32e2418d1d14e15/be-your-personal-tennis-coach.jpg" title="Equipe Enseignante" subtitle="Cjf Tennis" />
      <section className="teaching_team">
        <SectionTitle title='Les Formateurs' />
        <Teaching_Team className="formateurs" />
        <SectionTitle title='Les Assistants Formateurs' className="assistants_formateurs" />
        <Assistant_Teaching_Team />
      </section>
    </main>
  );
}

export default TeamTeaching;
