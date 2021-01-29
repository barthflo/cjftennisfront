import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import { useEffect } from 'react';

function CompetitionClubLeagueAndStage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="CompetitionClubLeagueAndStage">
      <BannerPhoto image="https://www.austade.fr/wp-content/uploads/2016/03/stephane-houdet-1.jpg" title="Compétitions Club Ligue et Stage" subtitle="Cjf Tennis"/>
    </div>
  );
}

export default CompetitionClubLeagueAndStage;