import BannerPhoto from "../../../components/banner-photo/BannerPhoto";
import InfrastructuresList from "../../../components/infrastructures/InfrastructuresList";
import { DOMAIN_URL } from '../../../http';

function OurInfrastructures() {
  return (
    <div className="OurInfrastructures">
      <BannerPhoto image={`${DOMAIN_URL}/upload/infrastructure_court_exterieur_5.jpg`} title="Nos Infrastructures" subtitle="Cjf Tennis"/>
      <InfrastructuresList />
    </div>
  );
}

export default OurInfrastructures;